import './reset.css';
import './app.css';
import './components/content.css';
import { renderHTML } from './components/renderHTML.js';
import { imgContents } from './components/imgContents.js';
import { onImgLoad } from './components/onImgLoad.js';
// const nodeEnv = process.env.NODE_ENV || 'development';
const log = console.log;
const app = () => {
  const render = () => {
    const contentMsg = `
      <div class="content">
        <div class="content-wrapper"></div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    document.addEventListener('DOMContentLoaded', () => {
      renderHTML(
        Object.keys(imgContents)
          .map(
            key =>
              `<div class="content-items" key="${key}"><img data-src="${imgContents[key].src}"/></div>`
          )
          .join(''),
        document.querySelector('.content-wrapper')
      );
      document.querySelectorAll('.content-items img').forEach(item => {
        new IntersectionObserver(onImgLoad).observe(item);
      });
    });
  };
  render();
};
app();
