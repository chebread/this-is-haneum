export const onLinkHover = links => {
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
};
