import { Card } from "./Card.js";

import {
  initialCards,
  profilePopup,
  popupCloseButtonElement,
  popupEditButtonElement,
  formProfileElement,
  profileName,
  profileJob,
  fieldNameData,
  fieldNameJob,
  popupPlaceElement,
  formCardElement,
  popupCloseButtonPlaceElement,
  popupFormMesto,
  popupAddButtonElement,
  cardsElements,
  fieldNameCard,
  fieldNameLink,
  elementPopupImage,
  popupCloseButtonImageElement,
  buttonElement,
  buttonPlaceElement,
  editProfileValidator,
  addCardValidator,
  openPopup,
  closePopup
} from "./utils.js";

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

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
};
const openAddElementPopup = function () {
  openPopup(popupPlaceElement);
  popupFormMesto.reset();
};
const closeAddElementPopup = function () {
  closePopup(popupPlaceElement);
};

const card = function (item) {
  const card = new Card(item, ".item-tamplate");
  return card;
};

initialCards.forEach((item) => {
  const cardElement = card(item).createCard();

  cardsElements.appendChild(cardElement);
});

const closeElementPopupImage = function () {
  closePopup(elementPopupImage);
};
function fillFormAddCardSubmitHandler(evt) {
  evt.preventDefault();
  const item = {
    name: fieldNameCard.value,
    link: fieldNameLink.value,
  };
  const cardElement = card(item).createCard();

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

formProfileElement.addEventListener("submit", fillFormSubmitHandler);
formCardElement.addEventListener("submit", fillFormAddCardSubmitHandler);
popupEditButtonElement.addEventListener("click", openEditProfilePopup);
popupCloseButtonElement.addEventListener("click", closeEditProfilePopup);
popupAddButtonElement.addEventListener("click", openAddElementPopup);
popupCloseButtonPlaceElement.addEventListener("click", closeAddElementPopup);
popupCloseButtonImageElement.addEventListener("click", closeElementPopupImage);
profilePopup.addEventListener("click", closePopupByClickOnOverlay);
popupPlaceElement.addEventListener("click", closePopupByClickOnOverlay);
elementPopupImage.addEventListener("click", closePopupByClickOnOverlay);
