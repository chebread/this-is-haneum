import './reset.css';
import './app.css';
import { render } from './modules/render.js';
import { onLinkHover } from './modules/onLinkHover.js';
import { defaultTemplete } from './modules/defaultTemplete.js';

const root = document.querySelector('#root');
// default renderings
root.insertAdjacentHTML('afterbegin', defaultTemplete);
render('en');

// for hover and laugage change
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
