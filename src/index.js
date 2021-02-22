import '../style.css';

import diplomPjImg from '../images/diplom.png';
import toDoImg from '../images/todoApp.png';
import mestoReactImg from '../images/mestoReact.png';
import mestoImg from '../images/mesto.png';
import turbinaImg from '../images/turbina.png';
import procastinateImg from '../images/procastinate.png';
import travelRussiaImg from '../images/travel.png';
import howToLearnImg from '../images/learn.png';
import portfolioImg from '../images/portfolio.png';
import diplom from '../images/diplom.png';
import cv from '../images/cvBig.png';

// Картиночки
const body = document.querySelector('.body');
const popups = document.querySelectorAll('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCardImg = document.querySelector('.popup__img');
const popupCardTitle = document.querySelector('.popup__title');
const popupCardDiscription = document.querySelector('.popup__discription');
const popupGitHub = document.querySelector('.popup__github-link');
const popupVisitApp = document.querySelector('.popup__app-link');
const popupCardView = document.querySelector('.popup__card');
const popupPdfView = document.querySelector('.popup__docs');

const popupCloseBtns = document.querySelectorAll('.popup__close');
const popupDocs = document.querySelector('.popup__docs');
const popupDocsImg = document.querySelector('.popup__doc');

const navButton = document.querySelector('.navbar__menu-button');
const navMenu = document.querySelector('.navbar');
const navMenuItem = document.querySelectorAll('.navbar__menu-item');
const docPdf = document.querySelectorAll('.docs-pdf');

const cards = document.querySelector('.cards');

const initialCards = [
    {
        title: 'The Degree Final Project',
        description:
            "'News Explorer' it is a full stack React application to allow users find and save news.  To find news user need to enter keyword. It is possiple to sign-up and save news in users profile. ",
        githubUrl: 'https://github.com/MilaSergeeva/news-explorer-frontend',
        url: 'https://milasergeeva.github.io/news-explorer-frontend/',
        imgUrl: diplomPjImg,
        id: 1,
    },
    {
        title: 'Todo app',
        description:
            'A Vanilla JavaScript Todo App. You can use the input field to enter the title of a new task and add that task to the list by either clicking the plus icon or hitting return. It is possible to sort tasks as completed or uncompleted. Orange your tasks (drag and drob). Data saved in Local Storage',
        githubUrl: 'https://github.com/MilaSergeeva/to_do_vanillaJS',
        url: ' https://milasergeeva.github.io/to_do_vanillaJS/',
        imgUrl: toDoImg,
        id: 2,
    },
    {
        title: 'Mesto-React',
        description:
            "'Mesto-React'. It is a full-stack single page application on React. It allows users to upload, view, like and delete photos, add . with following features - identification, authentication and authorization.",
        githubUrl: 'https://github.com/MilaSergeeva/react-mesto-api-full',
        url: 'https://mesto-react-front.herokuapp.com',
        imgUrl: mestoReactImg,
        id: 3,
    },
    {
        title: 'Mesto',
        description:
            "'Mesto' It is a single page application. OOP (class-based object-oriented js) ",
        githubUrl: 'https://github.com/MilaSergeeva/mesto',
        url: 'https://milasergeeva.github.io/mesto/',
        imgUrl: mestoImg,
        id: 4,
    },

    {
        title: 'Turbina',
        description:
            "'Turbina' is a voluntary promotion project for the children's bookshop Marshak. It's a React web application with a music player and a feedback form. ",
        githubUrl: 'https://github.com/MilaSergeeva/turbina-dd',
        url: 'https://milasergeeva.github.io/turbina-dd/',
        imgUrl: turbinaImg,
        id: 5,
    },
    {
        title: 'Procastinate',
        description: 'It is a study project. Simple JS generator of ideas for procrastination.',
        githubUrl: 'https://github.com/MilaSergeeva/procastinate',
        url: 'https://milasergeeva.github.io/procastinate/',
        imgUrl: procastinateImg,
        id: 6,
    },
    {
        title: "Landing 'Travel through Russia'",
        description:
            'it is a single page web site with useful information about how to travel through Russia.  HTML, CSS, adaptive layout',
        githubUrl: 'https://github.com/MilaSergeeva/russian-travel',
        url: 'https://milasergeeva.github.io/russian-travel/',
        imgUrl: travelRussiaImg,
        id: 7,
    },
    {
        title: "Landing 'How to learn'",
        description: 'It is a single page app with tips on how to learn. HTML, CSS adaptive layout',
        githubUrl: 'https://github.com/MilaSergeeva/how-to-learn',
        url: 'https://mkvaratshelia.github.io/learn/',
        imgUrl: howToLearnImg,
        id: 8,
    },
    {
        title: 'My Portfolio',
        description: 'It is a single page app to know me better',
        githubUrl: 'https://github.com/MilaSergeeva/portfolio',
        url: 'https://milasergeeva.github.io/portfolio/',
        imgUrl: portfolioImg,
        id: 9,
    },
];

docPdf[0].addEventListener('click', openPopupPdf);

navButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('nav-opened');
}

navMenuItem.forEach((item) =>
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('nav-opened')) {
            navMenu.classList.remove('nav-opened');
        }
    })
);

const closePopupByEsc = function (event) {
    if (event.keyCode === 27) {
        const popupOpened = document.querySelector('.popup_opened');
        console.log('z nen');
        if (popupOpened) {
            togglePopupClass(popupOpened);
        }
    }
};

//class toggle popup_opened
const togglePopupClass = function (element) {
    const popupElement = element.closest('.popup');

    popupElement.classList.toggle('popup_opened');

    if (popupElement.classList.contains('popup_opened')) {
        document.addEventListener('keydown', closePopupByEsc);
    } else {
        document.removeEventListener('keydown', closePopupByEsc);
    }
};

// overlay close func
const closePopupOverlay = function (event) {
    const popupElement = event.target;

    if (popupElement.classList.contains('popup')) {
        togglePopupClass(popupElement);
    }
};

function openPopupPdf(event) {
    if (event.target.alt === 'cv') {
        popupDocsImg.src = cv;
    } else {
        popupDocsImg.src = diplom;
    }

    console.log(event.target);
    togglePopupClass(popupDocs);
}

//open card popup func
const openPopupCard = function (event) {
    popupCardImg.src = event.target.src;
    popupCardTitle.textContent = event.target.alt;

    console.log('event.target', event.target);
    const insexOfCars = initialCards.findIndex((i) => i.title === event.target.alt);

    popupCardDiscription.textContent = initialCards[insexOfCars].description;
    popupVisitApp.href = initialCards[insexOfCars].url;
    popupGitHub.href = initialCards[insexOfCars].githubUrl;

    togglePopupClass(popupCardView);
};

//cards render
function renderCard(title, link, ghLink, appLink) {
    const cardsTemplateElement = document.querySelector('.card-template').content;
    const card = cardsTemplateElement.cloneNode(true);

    card.querySelector('.card__title').textContent = title; //заполняем элемент карточки по индексу массива

    const cardImg = card.querySelector('.card__img');
    const cardGitHub = card.querySelector('.card__github-link');
    const cardVisitApp = card.querySelector('.card__app-link');

    cardImg.src = link;
    cardImg.alt = title;
    cardGitHub.href = ghLink;
    cardVisitApp.href = appLink;

    cardImg.addEventListener('click', openPopupCard);

    return card;
}

initialCards.forEach((element) => {
    const renderedCards = renderCard(element.title, element.imgUrl, element.githubUrl, element.url);
    cards.append(renderedCards);
});

// -------------scroll animation----------------

let elementsToShow = document.querySelectorAll('.anim-on-scroll');
let section = document.querySelectorAll('.main-content');

console.log(elementsToShow, section);

const loop = () => {
    [].forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            if (!element.classList.contains('anim-stop')) {
                element.classList.remove('is-visible');
            }
        }
    });
    [].forEach.call(section, function (el) {
        const elId = el.id;
        const activeNavLink = document.querySelector('.navebar__link[href="#' + elId + '"]');
        if (isElementPartlyViewport(el)) {
            activeNavLink.classList.add('active-link');
        } else {
            if (!el.classList.contains('active-link')) {
                activeNavLink.classList.remove('active-link');
            }
        }
    });
};

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

function isElementPartlyViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

if (elementsToShow.length > 0) {
    window.addEventListener('scroll', () => loop());

    setTimeout(() => {
        loop();
    }, 400);
}

//close popup
popups.forEach((popup) => popup.addEventListener('click', closePopupOverlay));
popups.forEach((popup) => popup.addEventListener('keydown', closePopupByEsc));

popupCloseBtns.forEach((el) => {
    el.addEventListener('click', (event) => {
        const popupElement = event.target.closest('.popup');

        togglePopupClass(popupElement);
    });
});

// const header = document.querySelector('.header');

// const headerNavLinks = header.querySelectorAll('.navebar__link');
// headerNavLinks.forEach((link) => {
//     link.classList.add('current-link');
// });
