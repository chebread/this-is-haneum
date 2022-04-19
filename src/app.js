import './reset.css';
import './app.css';
import { render } from './components/render.js';
import { onLinkHover } from './components/onLinkHover.js';
import { header } from './components/header.js';
import { main } from './components/main.js';
import { footer } from './components/footer.js';

const root = document.querySelector('#root');
root.insertAdjacentHTML('afterbegin', `${header()}${main()}${footer()}`);
render('en');
// for link hover styling and laugauge changing
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(item => {
    item.addEventListener('click', e => {
      const value = e.target.value;
      render(value);
      onLinkHover(document.querySelectorAll('a'));
    });
    if ('ontouchstart' in document.documentElement) {
      item.addEventListener('touchstart', e => {
        if (!(e.target.classList.value === 'button-hover')) {
          e.target.classList += 'button-hover';
        }
      });
      item.addEventListener('touchend', e => {
        if (e.target.classList.value === 'button-hover') {
          e.target.classList.remove('button-hover');
        }
      });
    } else {
      item.addEventListener('mouseover', e => {
        if (!(e.target.classList.value === 'button-hover')) {
          e.target.classList += 'button-hover';
        }
      });
      item.addEventListener('mouseout', e => {
        if (e.target.classList.value === 'button-hover') {
          e.target.classList.remove('button-hover');
        }
      });
    }
  });
  onLinkHover(document.querySelectorAll('a'));
});
