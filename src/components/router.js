import { routeContents } from './routeContents.js';
import { renderRoute } from './renderRoute.js';

export const router = path => {
  if (!(path === window.location.pathname)) {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (!(path === '/')) {
      renderRoute('/404');
    }
    return;
  }
  renderRoute(path);
  window.onpopstate = () => {
    if (!routeContents[window.location.pathname]) {
      if (!(window.location.pathname === '/')) {
        renderRoute('/404');
      }
      return;
    }
    renderRoute(window.location.pathname);
  };
};
