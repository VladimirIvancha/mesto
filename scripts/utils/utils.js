export const initialCards = [
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

export const profilePopup = document.querySelector(".profile-popup");
const profileElement = document.querySelector(".profile");
export const popupCloseButtonElement = profilePopup.querySelector(".popup__close");
export const popupEditButtonElement = profileElement.querySelector(
  ".profile__edit-button"
);
export const formProfileElement = profilePopup.querySelector(".form");
export const profileName = profileElement.querySelector(".profile__title");
export const profileJob = profileElement.querySelector(".profile__subtitle");
export const fieldNameData = profilePopup.querySelector(".form__item-name");
export const fieldNameJob = profilePopup.querySelector(".form__item-prophecy");
export const popupPlaceElement = document.querySelector(".element-popup");
export const formCardElement = popupPlaceElement.querySelector(".form");
export const popupCloseButtonPlaceElement =
  popupPlaceElement.querySelector(".popup__close");
export const popupFormMesto = popupPlaceElement.querySelector(".form_mesto");
export const popupAddButtonElement = profileElement.querySelector(
  ".profile__add-button"
);
export const cardsElements = document.querySelector(".elements");
export const fieldNameCard = document.querySelector("#element-name");
export const fieldNameLink = document.querySelector("#element-link");
export const elementPopupImage = document.querySelector(".element-popup-image");
export const popupCloseButtonImageElement =
  elementPopupImage.querySelector(".popup__close");
export const titleElementPopup = elementPopupImage.querySelector(
  ".popup__image-title"
);
export const imageElementPopup = elementPopupImage.querySelector(".popup__image");
export const buttonElement = profilePopup.querySelector(".popup__save-info");
export const buttonPlaceElement = popupPlaceElement.querySelector(".popup__save-info");