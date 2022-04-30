const express = require('express');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.js'));
const path = require('path');
const app = express();
const nodeEnv = process.env.NODE_ENV || 'development';

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: require('./webpack.config.js').output.publicPath,
    stats: { colors: true },
  })
);
app.use((req, res, next) => {
  if (nodeEnv === 'development') {
    compiler.outputFileSystem.readFile(
      path.join(compiler.outputPath, 'index.html'),
      (err, result) => {
        if (err) return next(err);
        res.set('content-type', 'text/html').end(result);
      }
    );
    return;
  }
  if (nodeEnv === 'production') {
    res.sendFile(path.join(__dirname, './index.html'));
  }
});
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(process.env.PORT || 8080);
