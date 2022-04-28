export const onImgLoad = (entries, observer) => {
  entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
    if (isIntersecting && intersectionRatio > 0) {
      target.src = target.dataset.src;
      observer.unobserve(target);
    }
  });
};
