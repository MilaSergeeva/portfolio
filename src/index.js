import '../style.css';

import postmanIconImg from '../images/postman.svg';
import herokuIconImg from '../images/heroku.svg';
import typeScriptIconImg from '../images/ts.svg';
import sassImg from '../images/sass-1.svg';
import rubyOnRailsImg from '../images/RubyOnRails.svg';
import diplom from '../images/diploma.png';
import cypressImg from '../images/cypress.svg';
import websocketImg from '../images/websocket.svg';
import typescriptImg from '../images/typescript.svg';
import reduxImg from '../images/redux.svg';
import jestImg from '../images/jest.svg';
import { initialCards } from '../config.js';

// Картиночки
const popups = document.querySelectorAll('.popup');
const popupCardImg = document.querySelector('.popup__img');
const popupCardTitle = document.querySelector('.popup__title');
const popupCardDiscription = document.querySelector('.popup__discription');
const popupCardView = document.querySelector('.popup__card');

const popupCloseBtns = document.querySelectorAll('.popup__close');
const popupDocs = document.querySelector('.popup__docs');
const popupDocsImg = document.querySelector('.popup__doc');

const navButton = document.querySelector('.navbar__menu-button');
const navMenu = document.querySelector('.navbar');
const navMenuItem = document.querySelectorAll('.navbar__menu-item');
const docPdf = document.querySelectorAll('.docs-pdf');

const cards = document.querySelector('.cards');

docPdf[0].addEventListener('click', openPopupPdf);
docPdf[1].addEventListener('click', openPopupPdf);

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
        if (popupOpened) {
            deleteDomNodeBeforeClose();
            togglePopupClass(popupOpened);
        }
    }
};

//class toggle popup_opened
const togglePopupClass = function (element) {
    const popupElement = element.closest('.popup');

    // const popupDiscription = popupElement.querySelectorAll('.popup__discription');
    // popupDiscription.forEach((p) => p.remove());
    popupElement.classList.toggle('popup_opened');

    if (popupElement.classList.contains('popup_opened')) {
        document.addEventListener('keydown', closePopupByEsc);
    } else {
        document.removeEventListener('keydown', closePopupByEsc);
    }
};

function deleteDomNodeBeforeClose() {
    const popupDiscription = document.querySelectorAll('.popup__discription');
    const popupIcons = document.querySelectorAll('.icon__element');
    popupDiscription.forEach((p) => p.remove());
    popupIcons.forEach((i) => i.remove());
}

// overlay close func
const closePopupOverlay = function (event) {
    const popupElement = event.target;

    if (popupElement.classList.contains('popup')) {
        deleteDomNodeBeforeClose();
        togglePopupClass(popupElement);
    }
};

function openPopupPdf(event) {
    popupDocsImg.src = diplom;

    togglePopupClass(popupDocs);
}

//open card popup func
const openPopupCard = function (event) {
    const popup = document.querySelector('.popup__card');
    const discription = popup.querySelector('.popup__discription-container');
    const technologies = popup.querySelector('.technologies');
    const appLink = popup.querySelector('.popup__app-link');

    const cardImg = event.target.previousElementSibling;
    popupCardImg.src = cardImg.src;
    popupCardTitle.textContent = cardImg.alt;

    const indexOfCard = initialCards.findIndex((i) => i.title === cardImg.alt);

    appLink.href = initialCards[indexOfCard].url;

    initialCards[indexOfCard].description.forEach((string) => {
        discription.insertAdjacentHTML('beforeEnd', `<p class="popup__discription">${string}</p>`);
    });

    initialCards[indexOfCard].tech.forEach((icon) => {
        technologies.insertAdjacentHTML('beforeEnd', icon);
    });

    if (document.querySelector('.postmanIcon')) {
        document.querySelector('.postmanIcon').src = postmanIconImg;
    }

    if (document.querySelector('.herokuIcon')) {
        document.querySelector('.herokuIcon').src = herokuIconImg;
    }

    if (document.querySelector('.typeScriptIcon')) {
        document.querySelector('.typeScriptIcon').src = typeScriptIconImg;
    }

    if (document.querySelector('.sassIcon')) {
        document.querySelector('.sassIcon').src = sassImg;
    }

    if (document.querySelector('.rubyOnRailsIcon')) {
        document.querySelector('.rubyOnRailsIcon').src = rubyOnRailsImg;
    }

    if (document.querySelector('.cypressIcon')) {
        document.querySelector('.cypressIcon').src = cypressImg;
    }

    if (document.querySelector('.websocketIcon')) {
        document.querySelector('.websocketIcon').src = websocketImg;
    }

    if (document.querySelector('.typescriptIcon')) {
        document.querySelector('.typescriptIcon').src = typescriptImg;
    }

    if (document.querySelector('.reduxIcon')) {
        document.querySelector('.reduxIcon').src = reduxImg;
    }

    if (document.querySelector('.jestIcon')) {
        document.querySelector('.jestIcon').src = jestImg;
    }

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
    const overlayLink = card.querySelector('.overlay');

    cardImg.src = link;
    cardImg.alt = title;
    cardGitHub.href = ghLink;
    cardVisitApp.href = appLink;

    overlayLink.addEventListener('click', openPopupCard);

    return card;
}

initialCards.forEach((element) => {
    const renderedCards = renderCard(element.title, element.imgUrl, element.githubUrl, element.url);
    cards.append(renderedCards);
});

//

if (document.querySelector('.cypressSkillIcon')) {
    document.querySelector('.cypressSkillIcon').src = cypressImg;
}

if (document.querySelector('.websocketSkillIcon')) {
    document.querySelector('.websocketSkillIcon').src = websocketImg;
}

if (document.querySelector('.typescriptSkillIcon')) {
    document.querySelector('.typescriptSkillIcon').src = typescriptImg;
}

if (document.querySelector('.reduxSkillIcon')) {
    document.querySelector('.reduxSkillIcon').src = reduxImg;
    console.log('kra');
}

if (document.querySelector('.jestSkillIcon')) {
    document.querySelector('.jestSkillIcon').src = jestImg;
}

// -------------scroll animation----------------

let elementsToShow = document.querySelectorAll('.anim-on-scroll');
let section = document.querySelectorAll('.main-content');

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
    }, 100);
}

//close popup
popups.forEach((popup) => popup.addEventListener('click', closePopupOverlay));
popups.forEach((popup) => popup.addEventListener('keydown', closePopupByEsc));

popupCloseBtns.forEach((el) => {
    el.addEventListener('click', (event) => {
        const popupElement = event.target.closest('.popup');
        deleteDomNodeBeforeClose();
        togglePopupClass(popupElement);
    });
});

// const header = document.querySelector('.header');

// const headerNavLinks = header.querySelectorAll('.navebar__link');
// headerNavLinks.forEach((link) => {
//     link.classList.add('current-link');
// });

//Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
