import { TweenMax, Power2 } from 'gsap';

const verticalFadeIn = (elements: Array<HTMLElement>): Array<TweenMax> => {
  return TweenMax.staggerFromTo(elements, 1, {
    y: 30,
    autoAlpha: 0,
  }, {
    y: 0,
    autoAlpha: 1,
    clearProps: 'transform, opacity, visibility',
    ease: Power2.easeOut,
  }, 0.2)
};

export {
  verticalFadeIn,
}
