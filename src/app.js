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
      document.querySelectorAll('.content-items').forEach(item => {
        if (!('ontouchstart' in window)) {
          item.addEventListener('mousemove', () => {
            item.className = ' is-hover-content-items';
            if (imgContents[item.attributes.key.value].msg === undefined) {
              renderHTML(`This is Haneum`, item);
            } else {
              renderHTML(`${imgContents[item.attributes.key.value].msg}`, item);
            }
            item.addEventListener('mouseleave', e => {
              item.classList.remove('is-hover-content-items');
              item.className = 'content-items';
              item.innerHTML = `<img data-src="${
                imgContents[e.target.attributes.key.value].src
              }"/>`;
              new IntersectionObserver(onImgLoad).observe(
                item.attributes[1].ownerElement.childNodes[0]
              );
            });
          });
        } else {
          item.addEventListener('touchstart', () => {
            item.className = ' is-hover-content-items';
            if (imgContents[item.attributes.key.value].msg === undefined) {
              renderHTML(`This is Haneum`, item);
            } else {
              renderHTML(`${imgContents[item.attributes.key.value].msg}`, item);
            }
            item.addEventListener('touchend', e => {
              item.classList.remove('is-hover-content-items');
              item.className = 'content-items';
              item.innerHTML = `<img data-src="${
                imgContents[e.target.attributes.key.value].src
              }"/>`;
              new IntersectionObserver(onImgLoad).observe(
                item.attributes[1].ownerElement.childNodes[0]
              );
            });
          });
        }
      });
    });
  };
  render();
};
app();
