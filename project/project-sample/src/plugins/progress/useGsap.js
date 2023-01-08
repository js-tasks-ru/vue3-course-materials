import { gsap } from 'gsap';

/**
 * @typedef Tween {GSAPTween}
 *
 * @param {import('vue').Ref} tweenedRef - ref to be tweened
 * @param {import('gsap').TweenVars} options - gsap TweenVars options
 * @return {{ start: ({ from, to }) => Tween, getTween: () => Tween }}
 */
export function useGsap(tweenedRef, options) {
  let tween;
  return {
    start({ from, to }) {
      if (tween) {
        tween.kill();
      }
      if (to !== undefined && from !== undefined) {
        tween = gsap.fromTo(tweenedRef, { value: from }, { value: to, ...options });
      } else if (to !== undefined) {
        tween = gsap.to(tweenedRef, { value: to, ...options });
      } else if (from !== undefined) {
        tween = gsap.from(tweenedRef, { value: from, ...options });
      }
      return tween;
    },
    // from: () => {},
    // fromTo: () => {},
    getTween: () => tween,
  };
}
