import { routeContents } from './routeContents.js';
import { render } from './render.js';

export const router = path => {
  if (!(path === window.location.pathname)) {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (!(path === '/')) {
      render('/404');
    }
    return;
  }
  render(path);
  window.onpopstate = () => {
    if (!routeContents[window.location.pathname]) {
      if (!(window.location.pathname === '/')) {
        render('/404');
      }
      return;
    }
    render(window.location.pathname);
  };
};
