import './reset.css';
import './app.css';
import './components/content.css';
import { renderHTML } from './components/renderHTML.js';
import { imgContents } from './components/imgContents.js';

// const log = console.log;
const app = () => {
  const render = () => {
    const contentMsg = `
      <div class="content">
        <div class="content-wrapper"></div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    window.onload = () => {
      document.querySelector('.content-wrapper').innerHTML = `
        ${Object.keys(imgContents)
          .map(
            key =>
              `<div class="content-items"><img value="${key}" src="${imgContents[key]}"/></div>`
          )
          .join('')}
      `;
    };
  };
  render();
};
app();
