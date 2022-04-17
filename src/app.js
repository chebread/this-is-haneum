import './reset.css';
import './app.css';
import profileImg from './imgs/profile.png';
import { render } from './render.js';
import { onLinkHover } from './onLinkHover';

const root = document.querySelector('#root');
const defaultTemplete = `
  <header>
    <img src="${profileImg}"/>
    <h1></h1>
  </header>
    <main></main>
  <footer>
    <button value="ko">Korean</button>
    <button value="en">English</button>
    <button value="de">Germany</button>
    <button value="fr">France</button>
    <button value="jp">Japanese</button>
    <button value="cn">Chinese</button>
    <button value="es">Spanish</button>
    <button value="ar">Arabic</button>
  </footer>
`;
// default renderings
root.innerHTML = defaultTemplete;
render('ko');

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
