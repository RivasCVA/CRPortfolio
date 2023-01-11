/**
 * Calculates the age label.
 */

/**
 * References
 */
const fieldCardAge = $('.field-card__age');

/**
 * Calculates the current age based on today's date.
 * @param dateString ISO format date string.
 */
const getAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    const month = today.getMonth() - birthDate.getMonth();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
};

/**
 * Injects the calculated age to the HTML.
 */
const injectAge = () => {
    const age = getAge('2000-11-01');
    fieldCardAge.text(`${age} years old`);
};

/**
 * Initializes the component with the respective age.
 */
const init = () => {
    injectAge();
};

export default { init };
