import { renderHTML } from '../components/renderHTML.js';
import { imgContents } from '../components/imgContents.js';
import { onImgLoad } from '../components/onImgLoad.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <div class="content">
        <div class="content-wrapper"></div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    renderHTML(
      imgContents
        .map(
          (src, key) =>
            `<div class="content-items" key="${key}"><img data-src="${src}"/></div>`
        )
        .join(''),
      document.querySelector('.content-wrapper')
    );
    document.querySelectorAll('.content-items img').forEach(item => {
      new IntersectionObserver(onImgLoad).observe(item);
    });
  };
  render();
};
