import { content } from './content.js';

export const render = value => {
  document.querySelector('h1').innerHTML = content[value].name;
  document.querySelector('main').innerHTML = content[value].main;
};
