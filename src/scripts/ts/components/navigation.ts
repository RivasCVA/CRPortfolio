/**
 * References
 */
const sidenav = $('.sidenav');
const sidenavOverlay = $('.sidenav__overlay');
const sidenavContent = $('.sidenav__content');

const navbarBrand = $('.navbar__brand');
const navbarToggler = $('.navbar__toggler');

/**
 * Sets the Side Navigation to its 'active' state.
 */
const showSideNav = () => {
    $('body, html').addClass('scroll-disabled');

    sidenav.removeClass('sidenav--disabled');
    sidenavOverlay.removeClass('sidenav__overlay--inactive').addClass('sidenav__overlay--active');
    sidenavContent.removeClass('sidenav__content--inactive').addClass('sidenav__content--active');
};

/**
 * Sets the Side Navigation to its 'inactive' state.
 */
const closeSideNav = () => {
    sidenavOverlay.removeClass('sidenav__overlay--active').addClass('sidenav__overlay--inactive');
    sidenavContent.removeClass('sidenav__content--active').addClass('sidenav__content--inactive');

    setTimeout(() => {
        sidenav.addClass('sidenav--disabled');
    }, 325);

    $('body, html').removeClass('scroll-disabled');
};

const setupSideNavEvents = () => {
    // Show sidenav when...

    $('.navbar__toggler').on('click', () => {
        showSideNav();
    });

    // Hide sidenav when...

    $('.sidenav__overlay').on('click', () => {
        closeSideNav();
    });

    $('.sidenav__close-btn').on('click', () => {
        closeSideNav();
    });

    $('.sidenav__iconed-list').on('click', '.iconed-list__link', () => {
        closeSideNav();
    });
};

/**
 * Plays the on-load animations for the navigation components.
 */
const playStartAnimations = () => {
    navbarBrand.css('animation', 'revealBrand 1.5s ease-in-out forwards, glowBrand 3s linear infinite');
    navbarToggler.css('animation', 'revealToggler 1.75s');
};

/**
 * Initializes the element and all of it's children with their respective properties and actions.
 */
const init = () => {
    setupSideNavEvents();
};

export default { init, playStartAnimations };
