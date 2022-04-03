import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

export { openPopup, elementPopupImage, titleElementPopup, imageElementPopup };

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profilePopup = document.querySelector(".profile-popup");
const profileElement = document.querySelector(".profile");
const popupCloseButtonElement = profilePopup.querySelector(".popup__close");
const popupEditButtonElement = profileElement.querySelector(
  ".profile__edit-button"
);
const formElement = profilePopup.querySelector(".form");
const profileName = profileElement.querySelector(".profile__title");
const profileJob = profileElement.querySelector(".profile__subtitle");
const fieldNameData = profilePopup.querySelector(".form__item-name");
const fieldNameJob = profilePopup.querySelector(".form__item-prophecy");
const popupPlaceElement = document.querySelector(".element-popup");
const formCardElement = popupPlaceElement.querySelector(".form");
const popupCloseButtonPlaceElement =
  popupPlaceElement.querySelector(".popup__close");
const popupFormMesto = popupPlaceElement.querySelector(".form_mesto");
const popupAddButtonElement = profileElement.querySelector(
  ".profile__add-button"
);
const cardsElements = document.querySelector(".elements");
const fieldNameCard = document.querySelector("#element-name");
const fieldNameLink = document.querySelector("#element-link");
// const elementImage = document.querySelector(".element__image");
const elementPopupImage = document.querySelector(".element-popup-image");
const popupCloseButtonImageElement =
  elementPopupImage.querySelector(".popup__close");
const titleElementPopup = elementPopupImage.querySelector(
  ".popup__image-title"
);
const imageElementPopup = elementPopupImage.querySelector(".popup__image");
const buttonElement = profilePopup.querySelector(".popup__save-info");
const buttonPlaceElement = popupPlaceElement.querySelector(".popup__save-info");

const validationConfig = ({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save-info',
  inactiveButtonClass: 'popup__save-info_inactive',
  errorClass: 'form__input-error_active'
});

const editProfileValidator = new FormValidator(validationConfig, formElement);
const addCardValidator = new FormValidator(validationConfig, formCardElement);

editProfileValidator.enableValidation()
addCardValidator.enableValidation()

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener('keydown', closePopupByKeydownEsc)
}
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', closePopupByKeydownEsc)
}
const openEditProfilePopup = function () {
  openPopup(profilePopup);
  fieldNameData.value = profileName.textContent;
  fieldNameJob.value = profileJob.textContent;
};
const closeEditProfilePopup = function () {
  closePopup(profilePopup);
};
function fillFormSubmitHandler(evt) {
  evt.preventDefault();
  const userNameInput = fieldNameData.value;
  const userJobInput = fieldNameJob.value;
  profileName.textContent = userNameInput;
  profileJob.textContent = userJobInput;
  closePopup(profilePopup);
  buttonElement.classList.add("popup__save-info_inactive");
  buttonElement.setAttribute("disabled", true);
}
const openAddElementPopup = function () {
  openPopup(popupPlaceElement);
  popupFormMesto.reset();
};
const closeAddElementPopup = function () {
  closePopup(popupPlaceElement);
};

initialCards.forEach((item) => {
  const card = new Card(item, ".item-tamplate");
  const cardElement = card.createCard();

  cardsElements.appendChild(cardElement);
});

const closeElementPopupImage = function () {
  closePopup(elementPopupImage);
};
function fillFormAddCardSubmitHandler(evt) {
  evt.preventDefault();
  const userCardInput = {
    name: fieldNameCard.value,
    link: fieldNameLink.value,
  };

  const card = new Card(userCardInput, ".item-tamplate");
  const cardElement = card.createCard();

  cardsElements.prepend(cardElement);
  closeAddElementPopup();
  buttonPlaceElement.classList.add("popup__save-info_inactive");
  buttonPlaceElement.setAttribute("disabled", true);
}
// Реализация закрытия попапа при клике на оверлэй
const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.target);
};
// Реализация закрытия попапа при нажатии клавиши Escape
function closePopupByKeydownEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

formElement.addEventListener("submit", fillFormSubmitHandler);
formCardElement.addEventListener("submit", fillFormAddCardSubmitHandler);
popupEditButtonElement.addEventListener("click", openEditProfilePopup);
popupCloseButtonElement.addEventListener("click", closeEditProfilePopup);
popupAddButtonElement.addEventListener("click", openAddElementPopup);
popupCloseButtonPlaceElement.addEventListener("click", closeAddElementPopup);
popupCloseButtonImageElement.addEventListener("click", closeElementPopupImage);
profilePopup.addEventListener("click", closePopupByClickOnOverlay);
popupPlaceElement.addEventListener("click", closePopupByClickOnOverlay);
elementPopupImage.addEventListener("click", closePopupByClickOnOverlay);
