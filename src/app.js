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
    //   document.addEventListener('DOMContentLoaded', () => {
    //     const items = document.querySelectorAll('.content-items img');
    //     let value;
    //     items.forEach(item => {
    //       item.addEventListener('mouseover', e => {
    //         if (e.target.attributes) {
    //           value = e.target.attributes.value.value;
    //           e.target.parentNode.innerHTML = `hello`;
    //         }
    //       });
    //       item.addEventListener('mouseout', e => {
    //         log(e);
    //       });
    //     });
    //   });
  };
  render();
};
app();
