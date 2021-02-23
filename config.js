import diplomPjImg from './images/diplom.png';
import toDoImg from './images/todoApp.png';
import mestoReactImg from './images/mestoReact.png';
import mestoImg from './images/mesto.png';
import turbinaImg from './images/turbina.png';
import procastinateImg from './images/procastinate.png';
import travelRussiaImg from './images/travel.png';
import howToLearnImg from './images/learn.png';
import portfolioImg from './images/portfolio.png';

const jsIcon =
    '<li class="icon__element"><i class="icon fab fa-js"></i><p class="icon__name">JavaScript ES6</p></li>';

const reactIcon =
    '<li class="icon__element"><i class="icon fab fa-react"></i><p class="icon__name">React</p></li>';
const htmdIcon =
    '<li class="icon__element"><i class="icon fab fa-html5"></i><p class="icon__name">HTML5</p></li>';
const cssIcon =
    '<li class="icon__element"><i class="icon fab fa-css3-alt"></i><p class="icon__name">CSS3</p></li>';
const expressIcon =
    '<li class="icon__element"><i class="icon fab fa-node-js"></i><p class="icon__name">Node.js / Express.js</p></li>';
const mongoDB =
    '<li class="icon__element"><i class="icon fas fa-database"></i><p class="icon__name">MongoDB</p></li>';
const responsiveLeyout =
    '<li class="icon__element"><i class="icon fas fa-mobile-alt"></i><p class="icon__name">Responsive Layouts</p></li>';
const restAPI =
    '<li class="icon__element"><i class="icon far fa-comments"></i><p class="icon__name">Rest API</p></li>';
const webpackIcon =
    '<li class="icon__element"><i class="icon fas fa-box-open"></i><p class="icon__name">WebPack</p></li>';
const postmanIcon = `<li class="icon__element"><img srs="#" alt='postmanIcon' class='postmanIcon imgIcon'> <p class="icon__name icon__name-imgIcon">Postman</p></li>`;
const herokuIcon = `<li class="icon__element"><img srs="#" alt='herokuIcon' class='herokuIcon imgIcon'> <p class="icon__name icon__name-imgIcon">Heroku PaaS</p></li>`;

// document.querySelector('.postmanIcon').src = postmanIconImg;

const initialCards = [
    {
        title: 'The Degree Final Project',
        description: [
            "'News Explorer' it is a full stack React application to allow users find and save news.",
            'To find news user need to enter keyword.  It is possiple to sign-up and save news in users profile.',
            'Identification, authentication and authorization are realized in the appp',
            'Client-side and user-side validation, joi/celebrate modules, jwt-token',
            'Data saves in Local Storage',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/news-explorer-frontend',
        url: 'https://milasergeeva.github.io/news-explorer-frontend/',
        imgUrl: diplomPjImg,
        id: 1,
        tech: [
            jsIcon,
            reactIcon,
            cssIcon,
            htmdIcon,
            expressIcon,
            responsiveLeyout,
            restAPI,
            mongoDB,
            postmanIcon,
        ],
    },
    {
        title: 'Todo app',
        description: [
            'A Vanilla JavaScript Todo App.',
            'You can use the input field to enter the title of a new task and add that task to the list by either clicking the check icon or hitting return.',
            'It is possible to sort tasks as completed or uncompleted. Orange your tasks (drag and drob). View and edit current tasks. Change theme of the app (color/dark).',
            'Data saves in Local Storage',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/to_do_vanillaJS',
        url: ' https://milasergeeva.github.io/to_do_vanillaJS/',
        imgUrl: toDoImg,
        id: 2,
        tech: [jsIcon, htmdIcon, cssIcon, responsiveLeyout],
    },
    {
        title: 'Mesto-React',
        description: [
            "'Mesto-React'. It is a full-stack single page application on React. It allows users to upload, view, like and delete photos/cards.",
            'There are following features - identification, authentication and authorization.", "Backend and Frontend',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/react-mesto-api-full',
        url: 'https://mesto-react-front.herokuapp.com',
        imgUrl: mestoReactImg,
        id: 3,
        tech: [
            jsIcon,
            reactIcon,
            cssIcon,
            htmdIcon,
            expressIcon,
            responsiveLeyout,
            restAPI,
            mongoDB,
            postmanIcon,
        ],
    },
    {
        title: 'Mesto',
        description: [
            "'Mesto' It is a single page application. User can share their pictures with caption.",
            'Functionality: edit profile infornation, add new cards, delete and like cards, view card.',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/mesto',
        url: 'https://milasergeeva.github.io/mesto/',
        imgUrl: mestoImg,
        id: 4,
        tech: [jsIcon, cssIcon, htmdIcon, responsiveLeyout, webpackIcon],
    },

    {
        title: 'Turbina',
        description: [
            "'Turbina' is a voluntary promotion project for the children's bookshop Marshak. It's a React web application with a music player and a feedback form. ",
            'All the functionality of the project works in popular browsers and on modern devices. It has adaptive layout for different resolutions.',
            'Link to the final project in production - https://marshakbooks.ru/turbina/',
            'The project made in collaboration with students of Yandex.Practicum',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/turbina-dd',
        url: 'https://milasergeeva.github.io/turbina-dd/',
        imgUrl: turbinaImg,
        id: 5,
        tech: [jsIcon, reactIcon, cssIcon, htmdIcon, responsiveLeyout],
    },
    {
        title: 'Procastinate',
        description: [
            'It is a study project. Simple JS generator of ideas for procrastination.',
            'Press the button and get a new idea!',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/procastinate',
        url: 'https://milasergeeva.github.io/procastinate/',
        imgUrl: procastinateImg,
        id: 6,
        tech: [jsIcon, cssIcon, htmdIcon, responsiveLeyout],
    },
    {
        title: "Landing 'Travel through Russia'",
        description: [
            'It is a single page web site with useful information about how to travel through Russia.',
            'Flex and Grid were used for positioning objects. Adaptive layout (breaking point: 320px, 768px, 1024px,1280px). BEM notation',
            'The project uses links to third-party resources to obtain additional information. Links opening in a new browser tab.',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/russian-travel',
        url: 'https://milasergeeva.github.io/russian-travel/',
        imgUrl: travelRussiaImg,
        id: 7,
        tech: [jsIcon, cssIcon, htmdIcon, responsiveLeyout],
    },
    {
        title: "Landing 'How to learn'",
        description: [
            'It is a single page app with tips on how to learn. HTML, CSS adaptive layout',
            'Siple CSS animation, Absolute positioning, Adaptive layout, iFrames',
            'The project uses links to third-party resources to obtain additional information. Links opening in a new browser tab.',
        ],
        githubUrl: 'https://github.com/MilaSergeeva/how-to-learn',
        url: 'https://mkvaratshelia.github.io/learn/',
        imgUrl: howToLearnImg,
        id: 8,
        tech: [jsIcon, cssIcon, htmdIcon, responsiveLeyout],
    },
    {
        title: 'My Portfolio',
        description: ['It is a single page app to know me better'],
        githubUrl: 'https://github.com/MilaSergeeva/portfolio',
        url: 'https://milasergeeva.github.io/portfolio/',
        imgUrl: portfolioImg,
        id: 9,
        tech: [jsIcon, cssIcon, htmdIcon, responsiveLeyout, webpackIcon],
    },
];

export { initialCards };
