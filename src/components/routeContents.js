import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';

export const routeContents = {
  '/': {
    route: home,
    title: 'This is Haneum',
  },
  '/404': {
    route: notFoundPage,
    title: '404 Not found page.',
  },
};
