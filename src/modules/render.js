import { contents } from './contents.js';

export const render = value => {
  document.querySelector('h1').innerHTML = ``;
  document.querySelector('main').innerHTML = ``;
  document
    .querySelector('h1')
    .insertAdjacentHTML('afterbegin', contents[value].name);
  document
    .querySelector('main')
    .insertAdjacentHTML('afterbegin', contents[value].main);
};
