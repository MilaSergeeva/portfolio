// Картиночки
const body = document.querySelector('.body');
const popup = document.querySelector('.popup');
const popupCardView = document.querySelector('.popup__container');
const popupCardImg = document.querySelector('.popup__img');
const popupCardTitle = document.querySelector('.popup__title');
const popupCardDiscription = document.querySelector('.popup__disctiption');
const popupGitHub = document.querySelector('.popup-link__gitHub');
const popupVisitApp = document.querySelector('.popup__app-link');

const popupCloseBtn = document.querySelector('.popup__close');
const cards = document.querySelector('.cards');

const navButton = document.querySelector('.navbar__menu-button');
const navMenu = document.querySelector('.navbar');
const navMenuItem = document.querySelectorAll('.navbar__menu-item');

const initialCards = [
    {
        title: 'The Degree Final Project',
        description:
            "'News Explorer' it is a full stack React application to allow users find and save news.  To find news user need to enter keyword. It is possiple to sign-up and save news in users profile. ",
        githubUrl: 'https://github.com/MilaSergeeva/news-explorer-frontend',
        url: 'https://milasergeeva.github.io/news-explorer-frontend/',
        imgUrl: './images/diplom.png',
        id: 1,
    },
    {
        title: 'Todo app',
        description:
            'A Vanilla JavaScript Todo App. You can use the input field to enter the title of a new task and add that task to the list by either clicking the plus icon or hitting return. It is possible to sort tasks as completed or uncompleted. Orange your tasks (drag and drob). Data saved in Local Storage',
        githubUrl: 'https://github.com/MilaSergeeva/to_do_vanillaJS',
        url: ' https://milasergeeva.github.io/to_do_vanillaJS/',
        imgUrl: './images/todoApp.png',
        id: 2,
    },
    {
        title: 'Mesto-React',
        description:
            "'Mesto-React'. It is a full-stack single page application on React. It allows users to upload, view, like and delete photos, add . with following features - identification, authentication and authorization.",
        githubUrl: 'https://github.com/MilaSergeeva/react-mesto-api-full',
        url: 'https://mesto-react-front.herokuapp.com',
        imgUrl: './images/mestoReact.png',
        id: 3,
    },
    {
        title: 'Mesto',
        description:
            "'Mesto' It is a single page application. OOP (class-based object-oriented js) ",
        githubUrl: 'https://github.com/MilaSergeeva/mesto',
        url: 'https://milasergeeva.github.io/mesto/',
        imgUrl: './images/mesto.png',
        id: 4,
    },

    {
        title: 'Turbina',
        description:
            "'Turbina' is a voluntary promotion project for the children's bookshop Marshak. It's a React web application with a music player and a feedback form. ",
        githubUrl: 'https://github.com/MilaSergeeva/turbina-dd',
        url: 'https://milasergeeva.github.io/turbina-dd/',
        imgUrl: './images/turbina.png',
        id: 5,
    },
    {
        title: 'Procastinate',
        description: 'It is a study project. Simple JS generator of ideas for procrastination.',
        githubUrl: 'https://github.com/MilaSergeeva/procastinate',
        url: 'https://milasergeeva.github.io/procastinate/',
        imgUrl: './images/procastinate.png',
        id: 6,
    },
    {
        title: "Landing 'Travel through Russia'",
        description:
            'it is a single page web site with useful information about how to travel through Russia.  HTML, CSS, adaptive layout',
        githubUrl: 'https://github.com/MilaSergeeva/russian-travel',
        url: 'https://milasergeeva.github.io/russian-travel/',
        imgUrl: './images/travel.png',
        id: 7,
    },
    {
        title: "Landing 'How to learn'",
        description: 'It is a single page app with tips on how to learn. HTML, CSS adaptive layout',
        githubUrl: 'https://github.com/MilaSergeeva/how-to-learn',
        url: 'https://mkvaratshelia.github.io/learn/',
        imgUrl: './images/learn.png',
        id: 8,
    },
    {
        title: 'My Portfolio',
        description: 'It is a single page app to know me better',
        githubUrl: 'https://github.com/MilaSergeeva/portfolio',
        url: 'https://milasergeeva.github.io/portfolio/',
        imgUrl: './images/portfolio.png',
        id: 9,
    },
];

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

const closePopupByEscListener = function (event) {
    if (event.keyCode === 27) {
        const popupOpened = document.querySelector('.popup_opened');

        if (popupOpened) {
            togglePopupClass(popupOpened);
        }
    }
};

//Переключатель класса popup_opened
const togglePopupClass = function (element) {
    element.classList.toggle('popup_opened');

    if (element.classList.contains('popup_opened')) {
        document.addEventListener('keydown', closePopupByEscListener);
    } else {
        document.removeEventListener('keydown', closePopupByEscListener);
    }
};

// закрыть popup при нажатии на зону вне popup
const closePopupOverlay = function (event) {
    const popupElement = event.target;

    if (popupElement.classList.contains('popup')) {
        togglePopupClass(popupElement);
    }
};

//функция открытия popup с просмотром картинки
const openPopupCard = function (event) {
    popupCardImg.src = event.target.src;
    popupCardTitle.textContent = event.target.alt;

    initialCards.findIndex((i) => i.title === event.target.alt);

    popupCardDiscription.textContent = initialCards[i].description;
    popupVisitApp.href = initialCards[i].url;
    popupGitHub.href = initialCards[i].githubUrl;
};

//рендер карточки места
function renderPlace(title, link) {
    const cardsTemplateElement = document.querySelector('.card-template').content;
    const card = cardsTemplateElement.cloneNode(true);

    card.querySelector('.card__title').textContent = title; //заполняем элемент карточки по индексу массива

    const cardImg = card.querySelector('.card__img');

    cardImg.src = link;
    cardImg.alt = title;
    //Просмотр картинки из галереи
    cardImg.addEventListener('click', openPopupCard);
    //Бинды ивентов для элементов place
    return card;
}

//создание карточек для всех еллементов массива
initialCards.forEach((element) => {
    console.log('boom');
    const renderedPlace = renderPlace(element.title, element.imgUrl);
    // addPlace(element.title, element.link);
    cards.append(renderedPlace);
});

//закрытие просмотра картинки
popupCardView.addEventListener('click', closePopupOverlay);

//закрытие popup
popupCloseBtn.addEventListener('click', (event) => {
    const popupElement = event.target.closest('.popup');

    togglePopupClass(popupElement);
});

// -------------scroll animation----------------

let elementsToShow = document.querySelectorAll('.anim-on-scroll');

// Detect request animation frame
// let scroll =
//     window.requestAnimationFrame ||
//     // IE callback
//     function (callback) {
//         console.log('я тут');
//         window.setTimeout(callback, 400);
//     };

console.log(elementsToShow);

const loop = () => {
    console.log('mau');
    [].forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            if (!element.classList.contains('anim-stop')) {
                element.classList.remove('is-visible');
            }
        }
    });

    // scroll(loop);
};

// scroll(loop);
// Call the loop for the first time
// loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
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

if (elementsToShow.length > 0) {
    console.log('kras');
    window.addEventListener('scroll', () => loop());

    setTimeout(() => {
        loop();
    }, 400);
}

// const animItems = document.querySelectorAll('.show-on-scroll');
// let windowObject = document.body;
// console.log(windowObject);

// console.log(animItems);

// if (animItems.length > 0) {
//     window.addEventListener('scloll', animOnScroll);

//     function animOnScroll() {
//         const content = document.querySelector('.smooth');
//         console.log('я тут');
//         for (let i = 0; i < animItems.length; i++) {
//             console.log('тепеерь тут тут');
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             // console.log(animItem);
//             console.log('animItemHeight', animItemHeight);
//             console.log('animItemOffset', animItemOffset);
//             // console.log(animStart);

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             console.log('animItemPoint', animItemPoint);
//             console.log('window.innerHeight', window.innerHeight);

//             if (animItemHeight > window.innerHeight) {
//                 console.log('в if');
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             // const style = getComputedStyle(animItem);
//             // const matrix = new WebKitCSSMatrix(style.webkitTransform);
//             // const translateY = matrix.m42;
//             // if (translateY !== 0) {
//             //     animItemOffset += -translateY;
//             // }

//             const one = animItemOffset - animItemPoint;
//             const two = animItemOffset + animItemHeight;

//             console.log('one', one);
//             console.log('two', two);

//             if (document.body.scrollTop > one && document.body.scrollTop < two) {
//                 animItem.classList.add('is-visible');
//             } else {
//                 if (!animItem.classList.contains('anim')) {
//                     animItem.classList.remove('is-visible');
//                 }
//             }

//             // if (pageYOffset > one && pageYOffset < two) {
//             //     animItem.classList.add('is-visible');
//             // } else {
//             //     if (!animItem.classList.contains('anim')) {
//             //         animItem.classList.remove('is-visible');
//             //     }
//             // }

//             console.log(document.body.scrollTop);
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         console.log(window.pageYOffset, 'njldel');

//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, 400);
// }
