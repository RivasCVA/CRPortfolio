/**
 * Neccesary references for Webpack
 */
import 'jquery';
import 'bootstrap';
import '../../styles/scss/main.scss';
import '../../images/resume.pdf';
import '../../images/favicon.png';

/**
 * Module imports
 */
import observers from './basics/observers';
import terminal from './components/terminal';
import hero from './components/hero';
import navigation from './components/navigation';
import projects from './components/projects';
import contact from './components/contact';
import age from './components/age';

$(() => {
    // Window Setup
    $(window).scrollTop(0);

    // Observers Setup
    observers.init(1500);

    // Introduction
    terminal.intro([hero.playStartAnimations, navigation.playStartAnimations]);

    // Component Setup
    navigation.init();
    projects.init();
    contact.init();
    age.init();
});
