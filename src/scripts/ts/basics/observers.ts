/**
 * Implementation of All Intersection Observers
 */

// MARK: - Animation Event Listener

const animate = (element: HTMLElement, baseClassName: string) => {
    element.classList.add(`${baseClassName}--animate`);
    const listener = () => {
        element.classList.remove('hide-to-animate');
        element.classList.remove(`${baseClassName}--animate`);
        element.removeEventListener('animationend', listener);
    };
    element.addEventListener('animationend', listener);
};

// MARK: - about__details

const aboutDetails = $('.about__details');
const aboutDetailsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const summaryCard = $('.summary-card');
            animate(summaryCard[0], 'summary-card');
            aboutDetailsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

// MARK: - about__basics

const aboutBasics = $('.about__basics');
const aboutBasicsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            $('.field-card').each((i, element) => {
                setTimeout(() => {
                    animate(element, 'field-card');
                    aboutBasicsObserver.unobserve(entry.target);
                }, ((i + (($(window).width() || 0) < 992 ? 0 : 1)) * 300));
            });
        }
    });
}, { threshold: 0 });

// MARK: - about__languages

const aboutLanguages = $('.about__languages');
const aboutLanguagesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            $('.slider-card').removeClass('slider-card--inactive');
            aboutLanguagesObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 });

// MARK: - Initialization

/**
 * Initializes all intersection observers.
 * @param delay A specified timeout delay (in milliseconds) before the observers are setup.
 */
const init = (delay: number = 0) => {
    setTimeout(() => {
        aboutLanguagesObserver.observe(aboutLanguages[0]);
        aboutBasicsObserver.observe(aboutBasics[0]);
        aboutDetailsObserver.observe(aboutDetails[0]);
    }, delay);
};

export default { init };
