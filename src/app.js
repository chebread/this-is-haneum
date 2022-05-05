import './reset.css';
import './app.css';
import './routes/content.css';
import { router } from './components/router.js';
import { routeContents } from './components/routeContents.js';

const app = () => {
  const render = () => {
    router(window.location.pathname);
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
          if (
            ((routeContents[
              e.target.href.substring(
                e.target.href.indexOf('/', 8),
                e.target.href.length
              )
            ] ===
              undefined) ===
              false) ===
            true
          ) {
            e.preventDefault();
            router(
              e.target.href.substring(
                e.target.href.indexOf('/', 8),
                e.target.href.length
              )
            );
          }
          return;
        }
      });
    });
  };
  render();
};
app();
