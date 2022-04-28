import './reset.css';
import './app.css';
import './components/content.css';
import { renderHTML } from './components/renderHTML.js';
import { imgContents } from './components/imgContents.js';
import { onImgLoad } from './components/onImgLoad.js';

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
              `<div class="content-items"><img
                data-src="${imgContents[key].src}"
                title="${
                  !(imgContents[key].msg === undefined)
                    ? `${imgContents[key].msg}`
                    : 'No description is written on this photo.'
                }"
                alt="${
                  !(imgContents[key].msg === undefined)
                    ? `${imgContents[key].msg}`
                    : 'No description is written on this photo.'
                }"/></div>`
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
