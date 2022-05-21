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
const popupCloseButtonElement = profilePopup.querySelector(".popup__close");
export const popupEditButtonElement = profileElement.querySelector(
  ".profile__edit-button"
);
const formProfileElement = profilePopup.querySelector(".form");
const profileName = profileElement.querySelector(".profile__title");
const profileJob = profileElement.querySelector(".profile__subtitle");
export const fieldNameData = profilePopup.querySelector(".form__item-name");
export const fieldNameProphecy = profilePopup.querySelector(".form__item-prophecy");
export const popupPlaceElement = document.querySelector(".element-popup");
const formCardElement = popupPlaceElement.querySelector(".form");
const popupCloseButtonPlaceElement =
  popupPlaceElement.querySelector(".popup__close");
const popupFormMesto = popupPlaceElement.querySelector(".form_mesto");
export const popupAddButtonElement = profileElement.querySelector(
  ".profile__add-button"
);
export const editAvatarButton = profileElement.querySelector(".profile__avatar"); 
export const popupAvatar = document.querySelector(".edit-avatar-popup")
const cardsElements = document.querySelector(".elements");
const fieldNameCard = document.querySelector("#element-name");
const fieldNameLink = document.querySelector("#element-link");
const elementPopupImage = document.querySelector(".element-popup-image");
const popupCloseButtonImageElement =
  elementPopupImage.querySelector(".popup__close");
const titleElementPopup = elementPopupImage.querySelector(
  ".popup__image-title"
);
const imageElementPopup = elementPopupImage.querySelector(".popup__image");
const buttonElement = profilePopup.querySelector(".popup__save-info");
const buttonPlaceElement = popupPlaceElement.querySelector(".popup__save-info");

export const profileSelector = ".profile-popup"; // cелектор попапа с профилем
export const addCardSelector = ".element-popup"; // селектор попапа с формой добавления карточки
export const popupWithImageSelector = ".element-popup-image" // селектор попапа с большим фото
export const deleteCardPopupSelector = ".delete-card-popup" // селектор попапа удаления
export const editAvatarPopupSelector = ".edit-avatar-popup" // селектор попапа редактирования аватара

const profileNameSelector = ('.profile__title'); //Селектор имени пользователя 
const profileProphecySelector = ('.profile__subtitle');  //Селектор описания пользователя
const profileAvatarSelector = ('.profile__avatar');  //Селектор аватара пользователя
export const userInfoSelector = { // данные пользователя
  name: profileNameSelector,
  prophecy: profileProphecySelector,
  avatar: profileAvatarSelector,
}

export const cardListSection = ".elements"; //селектор секция с карточками

// аргументы для валидации
export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".popup__save-info",
  inactiveButtonClass: "popup__save-info_inactive",
  errorClass: "form__input-error_active",
};