import './reset.css';
import './app.css';
import './components/content.css';
import { renderHTML } from './components/renderHTML.js';
import { imgContents } from './components/imgContents.js';

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
        `${imgContents
          .map(
            item =>
              `<div class="content-items"><canvas value="${item}"></canvas></div>`
          )
          .join('')}
          `,
        document.querySelector('.content-wrapper')
      );
      document.querySelectorAll('.content-items canvas').forEach(item => {
        item.width = 100;
        item.height = 100;
        const img = new Image();
        img.src = item.attributes.value.value;
        img.onload = () => {
          item.getContext('2d').drawImage(img, 0, 0, 100, 100);
        };
      });
    });
  };
  render();
};
app();
