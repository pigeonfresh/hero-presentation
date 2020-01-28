import { TweenMax, Expo } from 'gsap';

const verticalFadeIn = (items: Array<HTMLElement>): Array<TweenMax> => {
  return TweenMax.staggerFromTo(items, 1, {
    autoAlpha: 0,
    y: 30,
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Expo.easeInOut,
    clearProps: 'visibility, opacity, transform',
  }, 0.2)
};

export {
  verticalFadeIn,
}
