import { routeContents } from './routeContents.js';

export const render = path => {
  if (!routeContents[path].title) {
    document.title = 'This is Haneum';
  } else {
    document.title = routeContents[path].title;
  }
  routeContents[path].route();
};
