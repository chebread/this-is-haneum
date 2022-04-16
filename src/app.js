import './reset.css';
import './app.css';
import profileImg from './imgs/profile.png';
import { render } from './render.js';

const root = document.querySelector('#root');
// default renderings
root.innerHTML = `
  <header>
    <img src="${profileImg}"/>
    <h1></h1>
  </header>
  <main></main>
  <footer>
    <button value="ko">Korean</button> <button value="en">English</button> <button value="de">Germany</button> <button value="fr">France</button> <button value="jp">Japanese</button>
  </footer>
`;
render('ko');

// for hover and laugage change
let links = [];
document.addEventListener('DOMContentLoaded', () => {
  links = document.querySelectorAll('a');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(item => {
    item.addEventListener('click', e => {
      const value = e.target.value;
      render(value);
      links = document.querySelectorAll('a');
      links.forEach(item => {
        if ('ontouchstart' in document.documentElement) {
          item.addEventListener('touchstart', e => {
            if (!(e.target.classList.value === 'link-hover')) {
              e.target.classList += 'link-hover';
            }
          });
          item.addEventListener('touchend', e => {
            if (e.target.classList.value === 'link-hover') {
              e.target.classList.remove('link-hover');
            }
          });
        } else {
          item.addEventListener('mouseover', e => {
            if (!(e.target.classList.value === 'link-hover')) {
              e.target.classList += 'link-hover';
            }
          });
          item.addEventListener('mouseout', e => {
            if (e.target.classList.value === 'link-hover') {
              e.target.classList.remove('link-hover');
            }
          });
        }
      });
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
  links.forEach(item => {
    if ('ontouchstart' in document.documentElement) {
      item.addEventListener('touchstart', e => {
        if (!(e.target.classList.value === 'link-hover')) {
          e.target.classList += 'link-hover';
        }
      });
      item.addEventListener('touchend', e => {
        if (e.target.classList.value === 'link-hover') {
          e.target.classList.remove('link-hover');
        }
      });
    } else {
      item.addEventListener('mouseover', e => {
        if (!(e.target.classList.value === 'link-hover')) {
          e.target.classList += 'link-hover';
        }
      });
      item.addEventListener('mouseout', e => {
        if (e.target.classList.value === 'link-hover') {
          e.target.classList.remove('link-hover');
        }
      });
    }
  });
});
