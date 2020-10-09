/**
 * Adjustable Properties
 */
const toggleAnimationDuration = 1250;
const minCards = ($(window).width() || 0) > 576 ? 8 : 4;

/**
 * References
 */
const showcaseCards = $('.showcase-card');
const showBtn = $('.projects__show-btn');

/**
 * Helpers
 */
let isShowingAll = false;
let isAnimating = false;

/**
 * Hides all visiible cards, only leaving the minimum number of allowed cards.
 */
const showLimitedCards = () => {
    isAnimating = true;

    const filtered = showcaseCards.filter((i) => (i >= minCards));
    filtered.addClass('showcase-card--animate-disable');

    setTimeout(() => {
        filtered.removeClass('showcase-card--animate-disable').css('display', 'none');
        showBtn.text('Show More');
        isAnimating = false;
    }, toggleAnimationDuration);
};

/**
 * Makes all possible cards visible.
 */
const showAllCards = () => {
    isAnimating = true;

    const filtered = showcaseCards.filter((i) => (i >= minCards));
    filtered.css('display', 'flex').addClass('showcase-card--animate-enable');

    setTimeout(() => {
        filtered.removeClass('showcase-card--animate-enable');
        showBtn.text('Show Less');
        isAnimating = false;
    }, toggleAnimationDuration);
};

const setupEvents = () => {
    // Toggle cards when ...

    showcaseCards.on('click', (evnt) => {
        if ($(evnt.target).parents().hasClass('showcase-card__links')) { return; }
        const isFlipped = $(evnt.currentTarget).hasClass('showcase-card--flipped');
        showcaseCards.removeClass('showcase-card--flipped');
        if (!isFlipped) {
            $(evnt.currentTarget).addClass('showcase-card--flipped');
        }
    });

    showBtn.on('click', () => {
        if (isAnimating) return;
        isShowingAll = !isShowingAll;
        if (isShowingAll) {
            showAllCards();
        } else {
            showLimitedCards();
        }
    });
};

/**
 * Hides the show button if all cards are shown when in the limited state.
 */
const setupShowButton = () => {
    if (showcaseCards.length <= minCards) {
        showBtn.hide();
        $('.projects').css('padding-bottom', '75px');
    }
};

/**
 * Initializes the element and all of it's children with their respective properties and actions.
 */
const init = () => {
    setupEvents();
    showLimitedCards();
    setupShowButton();
};

export default { init };
