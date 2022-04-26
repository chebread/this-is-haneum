import './reset.css';
import './app.css';
import './components/content.css';
import { renderHTML } from './components/renderHTML.js';
import { imgContents } from './components/imgContents.js';

const app = () => {
  const render = () => {
    const contentMsg = `
      <div class="content">
        <div class="content-wrapper">
          ${Object.keys(imgContents)
            .map(
              key =>
                `<div class="content-items"><img value="${key}" src="${imgContents[key]}"/></div>`
            )
            .join('')}
        </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
app();
