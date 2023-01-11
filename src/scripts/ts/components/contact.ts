/**
 * References
 */
const emailCellIcon = $('.contact-cell--email').children('.contact-cell__icon');
const emailCellLabel = $('.contact-cell--email').children('.contact-cell__label');

const callCellIcon = $('.contact-cell--call').children('.contact-cell__icon');
const callCellLabel = $('.contact-cell--call').children('.contact-cell__label');

const githubCellIcon = $('.contact-cell--github').children('.contact-cell__icon');
const githubCellLabel = $('.contact-cell--github').children('.contact-cell__label');

const linkedinCellIcon = $('.contact-cell--linkedin').children('.contact-cell__icon');
const linkedinCellLabel = $('.contact-cell--linkedin').children('.contact-cell__label');

const instagramCellIcon = $('.contact-cell--instagram').children('.contact-cell__icon');
const instagramCellLabel = $('.contact-cell--instagram').children('.contact-cell__label');

/**
 * Social Media Links
 */
enum RivasMedia {
    github = 'https://github.com/RivasCVA',
    linkedin = 'https://www.linkedin.com/in/RivasCVA',
    instagram = 'https://www.instagram.com/rivascarlosva'
}

/**
 * Initiates an email event
 * @param email The recipient email
 */
const openEmail = (email?: string) => {
    window.open(`mailto:${email || 'rivascarlosva@gmail.com'}`, '_self');
};

/**
 * Initiates a call event
 * @param phoneNumber The number to call
 */
const openCall = (phoneNumber?: string) => {
    window.open(`tel:${phoneNumber || '+1(205)482-8564'}`, '_self');
};

/**
 * Opens a new window to the desired social media website.
 * @param website The website link to open
 */
const openSocialMedia = (website?: RivasMedia) => {
    window.open(`${website || RivasMedia.github}`, '_blank');
};

const setupEvents = () => {
    // Toggle contact event when ...

    emailCellIcon.on('click', () => { openEmail(); });
    emailCellLabel.on('click', () => { openEmail(); });

    callCellIcon.on('click', () => { openCall(); });
    callCellLabel.on('click', () => { openCall(); });

    githubCellIcon.on('click', () => { openSocialMedia(RivasMedia.github); });
    githubCellLabel.on('click', () => { openSocialMedia(RivasMedia.github); });

    linkedinCellIcon.on('click', () => { openSocialMedia(RivasMedia.linkedin); });
    linkedinCellLabel.on('click', () => { openSocialMedia(RivasMedia.linkedin); });

    instagramCellIcon.on('click', () => { openSocialMedia(RivasMedia.instagram); });
    instagramCellLabel.on('click', () => { openSocialMedia(RivasMedia.instagram); });
};

/**
 * Initializes the principle events for the contact links.
 */
const init = () => {
    setupEvents();
};

export default { init };
