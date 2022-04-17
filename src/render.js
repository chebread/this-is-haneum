import { contents } from './contents.js';

export const render = value => {
  document.querySelector('h1').innerHTML = contents[value].name;
  document.querySelector('main').innerHTML = contents[value].main;
};
