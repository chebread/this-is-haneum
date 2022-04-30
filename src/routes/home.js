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
      Object.keys(imgContents)
        .map(
          key =>
            `<div class="content-items">
                  <img
                  data-src="${imgContents[key].src}"
                  alt="${
                    !(imgContents[key].msg === undefined)
                      ? `${imgContents[key].msg}`
                      : 'No description is written on this photo.'
                  }"/>
                </div>`
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
