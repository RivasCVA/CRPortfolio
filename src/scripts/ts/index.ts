import observers from './basics/observers';
import terminal from './components/terminal';
import hero from './components/hero';
import navigation from './components/navigation';
import projects from './components/projects';
import contact from './components/contact';

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
});
