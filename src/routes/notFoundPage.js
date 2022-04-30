import { renderHTML } from '../components/renderHTML.js';

export const notFoundPage = () => {
  const render = () => {
    const contentMsg = `
      <div class="nfp-content">
        <div class="nfp-content-wrapper">
          <div class="nfp-content-msg">
            <p>404 Not found page.</p>
            <p>Sorry. Do you want <a href="/">to go the first route</a>?</p>
          </div>
      </div>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
    if ('ontouchstart' in document.documentElement) {
      document
        .querySelector('.nfp-content-msg a')
        .addEventListener('touchstart', e => {
          e.target.style.textDecoration = 'underline';
        });
      document
        .querySelector('.nfp-content-msg a')
        .addEventListener('touchend', e => {
          e.target.style.textDecoration = '';
        });
    } else {
      document
        .querySelector('.nfp-content-msg a')
        .addEventListener('mouseover', e => {
          e.target.style.textDecoration = 'underline';
        });
      document
        .querySelector('.nfp-content-msg a')
        .addEventListener('mouseleave', e => {
          e.target.style.textDecoration = '';
        });
    }
  };
  render();
};
