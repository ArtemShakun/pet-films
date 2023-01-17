import homeIcon from '../assets/home.png';
import community from '../assets/community.png';
import compass from '../assets/compass.png';
import stopwatch from '../assets/stopwatch.png';
import user from '../assets/user.png';
import friend from '../assets/friend.png';
import play from '../assets/play.png';

export const navBarMenu = [
    {
        category: 'MENU',
        nav: [
            { title: 'Home', icon: homeIcon },
            { title: 'Community', icon: community },
            { title: 'Discovery', icon: compass },
            { title: 'Comming soon', icon: stopwatch },
        ],
    },
    {
        category: 'SOCIAL',
        nav: [
            { title: 'Friends', icon: user },
            { title: 'Parties', icon: friend },
            { title: 'Media', icon: play },
        ],
    },
    {
        category: 'GENERAL',
        nav: [
            { title: 'Setting', icon: stopwatch },
            { title: 'Log out', icon: stopwatch },
        ],
    },
];
