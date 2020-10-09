/**
 * Adjustable Properties
 */
const startDelay = 150;
const blinkRate = 650;
const typeRate = 90;

/**
 * References
 */
const terminal = $('.terminal');
const command = $('.terminal__command');
const cursor = $('.terminal__cursor');

/**
 * Animates a terminal command and removes the terminal element from the DOM upon completion.
 * @param text The command text to animate
 */
const animate = (text: string, completions: (() => void)[]) => {
    $('body, html').addClass('scroll-disabled');

    // Start after delay
    setTimeout(() => {
        // Cursor blink animation
        const cursorInterval = window.setInterval(() => {
            cursor.toggleClass('terminal__cursor--inactive');
        }, blinkRate);

        // Command type animation
        let index = 0;
        const leadingText = command.html();
        const textInterval = window.setInterval(() => {
            command.html(leadingText + text.substring(0, index));
            if (index === text.length + 2) {
                command.html(`${leadingText + text}<br>running...</br>`);
                cursor.removeClass('terminal__cursor--inactive');

                clearInterval(textInterval);
                clearInterval(cursorInterval);

                // Run handles
                completions.forEach((completion) => {
                    completion();
                });
                terminal.delay(500).fadeOut(1000, () => {
                    $('body, html').removeClass('scroll-disabled');
                    // Remove element from DOM
                    terminal.remove();
                });
            }
            index += 1;
        }, typeRate);
    }, startDelay);
};

/**
 * The default introduction using a terminal command animation before the main page is shown.
 * @param completion A callback function executed when the animation completes.
 */
const intro = (completions: (() => void)[]) => {
    animate('cr.portfolio.exe', completions);
};

export default { intro };
