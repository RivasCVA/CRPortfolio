/**
 * Primarily handles the Hero section start animations.
 */

/**
 * Adjustable Properties
 */
const bulletedListSwiperDelay = 650;

/**
 * References
 */
const heroImage = $('.hero__img');
const bulletedListLeftSwiper = $('.bulleted-list__swiper--left');
const bulletedListRightSwiper = $('.bulleted-list__swiper--right');
const buttonListButtons = $('.button-list__btn');

/**
 * Plays the on-load animations for the hero section components.
 */
const playStartAnimations = () => {
    heroImage.css('animation', 'showHeroImage 2000ms');
    bulletedListLeftSwiper.css('animation', `swipeLeft 3000ms ease-out forwards ${bulletedListSwiperDelay}ms`);
    bulletedListRightSwiper.css('animation', `swipeRight 3000ms ease-out forwards ${bulletedListSwiperDelay}ms`);
    buttonListButtons.css('animation', 'showButton 2000ms');
};

export default { playStartAnimations };
