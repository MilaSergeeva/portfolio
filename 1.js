const closePopupByEscListener = function (event) {
    if (event.keyCode === 27) {
        const popupOpened = document.querySelector('.popup_opened');

        if (popupOpened) {
            togglePopupClass(popupOpened);
        }
    }
};

//Переключатель класса popup_opened
function togglePopupClass(element) {
    element.classList.toggle('popup_opened');
}

// назначения слушателя по ESC
function toggleEscEventListener(element) {
    if (element.classList.contains('popup_opened')) {
        document.addEventListener('keydown', closePopupByEscListener);
    } else {
        document.removeEventListener('keydown', closePopupByEscListener);
    }
}

function togglePopupElement(element) {
    togglePopupClass(element);

    toggleEscEventListener(element);
}

// закрыть popup при нажатии на зону вне popup
const closePopupOverlay = function (event) {
    const popupElement = event.target;

    if (popupElement.classList.contains('popup')) {
        togglePopupElement(popupElement);
    }
};

// //создание карточек для всех еллементов массива
initialCards.reverse().forEach((element) => {
    addPlace(element.name, element.link);
});

//закрытие просмотра картинки
popupPicView.addEventListener('click', closePopupOverlay);
