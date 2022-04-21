import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

import {
  initialCards,
  profilePopup,
//   popupCloseButtonElement,
  popupEditButtonElement,
  formProfileElement,
  profileName,
  profileJob,
//   fieldNameData,
//   fieldNameJob,
  popupPlaceElement,
  formCardElement,
//   popupCloseButtonPlaceElement,
//   popupFormMesto,
  popupAddButtonElement,
  cardsElements,
  fieldNameCard,
  fieldNameLink,
  elementPopupImage,
//   popupCloseButtonImageElement,
//   buttonElement,
//   buttonPlaceElement,
//   editProfileValidator,
//   addCardValidator,
//   formData,
//   openPopup,
//   closePopup
} from "./utils.js";



//
//



//Загрузка данных профиля
const copyProfileData = new UserInfo(profileName, profileJob);

//Попап редактирования данных профиля
const popupEditProfile = new PopupWithForm(profilePopup, ({name, prophecy}) => {
    copyProfileData.setUserInfo({name, prophecy});
    popupEditProfile.close();
})

popupEditButtonElement.addEventListener('click', () => {
    // inputProfileName.value = copyProfileData.getUserInfo().name;
    // inputProfileNameDescription.value = copyProfileData.getUserInfo().desc;
    popupEditProfile.setInputValues(copyProfileData.getUserInfo());
    popupEditProfile.open();
    editProfileValidator.enableValidation();
})

//Попап добавления новой карточки
const popupAddCard = new PopupWithForm(popupPlaceElement, () => {
    // const card = addNewCard({name:name, link:link});
    // const cardElement = card.createCard();
    const item = {
        name: fieldNameCard.value,
        link: fieldNameLink.value,
    };
    cardsList.addItem(item);
    // popupAddCard.close();
})

popupAddCard.setEventListeners()

popupAddButtonElement.addEventListener('click', () => {
    popupAddCard.open();
    addCardValidator.enableValidation();
})

//Попап с увеличенным видом картинки
const popupWithImage = new PopupWithImage(elementPopupImage);
popupWithImage.setEventListeners();

//функция для создания карточки
const addNewCard = (data) => {
    const card = new Card(data, ".item-tamplate", popupWithImage.open.bind(popupWithImage));
    return card.createCard();
};

//Отрисовка начальных карточек
const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        return addNewCard(cardItem);
        // const cardElement = addNewCard(cardItem).createCard();
        // cardsList.addItem(cardElement);
    }
}, cardsElements);

cardsList.renderItems();

//Валидация
const validationConfig = {
    formSelector: ".form",
    inputSelector: ".form__item",
    submitButtonSelector: ".popup__save-info",
    inactiveButtonClass: "popup__save-info_inactive",
    errorClass: "form__input-error_active",
};
  
const editProfileValidator = new FormValidator(
    validationConfig,
    formProfileElement
);
const addCardValidator = new FormValidator(
    validationConfig, 
    formCardElement
    );

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//
//

// editProfileValidator.enableValidation();
// addCardValidator.enableValidation();

// const openEditProfilePopup = function () {
//   openPopup(profilePopup);
//   fieldNameData.value = profileName.textContent;
//   fieldNameJob.value = profileJob.textContent;
// };
// const closeEditProfilePopup = function () {
//   closePopup(profilePopup);
// };
// function fillFormSubmitHandler(evt) {
//   evt.preventDefault();
//   const userNameInput = fieldNameData.value;
//   const userJobInput = fieldNameJob.value;
//   profileName.textContent = userNameInput;
//   profileJob.textContent = userJobInput;
//   closePopup(profilePopup);
//   buttonElement.classList.add("popup__save-info_inactive");
//   buttonElement.setAttribute("disabled", true);
// };
// const openAddElementPopup = function () {
//   openPopup(popupPlaceElement);
//   popupFormMesto.reset();
// };
// const closeAddElementPopup = function () {
//   closePopup(popupPlaceElement);
// };

// const card = function (item) {
//   const card = new Card(item, ".item-tamplate");
//   return card;
// };

// initialCards.forEach((item) => {
//   const cardElement = addNewCard(item).createCard();

//   cardsElements.appendChild(cardElement);
// });

// const closeElementPopupImage = function () {
//   closePopup(elementPopupImage);
// };
// function fillFormAddCardSubmitHandler(evt) {
//   evt.preventDefault();
//   const item = {
//     name: fieldNameCard.value,
//     link: fieldNameLink.value,
//   };
//   const cardElement = addNewCard(item).createCard();

//   cardsElements.prepend(cardElement);
//   closeAddElementPopup();
//   buttonPlaceElement.classList.add("popup__save-info_inactive");
//   buttonPlaceElement.setAttribute("disabled", true);
// }
// // Реализация закрытия попапа при клике на оверлэй
// const closePopupByClickOnOverlay = function (event) {
//   if (event.target !== event.currentTarget) {
//     return;
//   }
//   closePopup(event.target);
// };

// formProfileElement.addEventListener("submit", fillFormSubmitHandler);
// formCardElement.addEventListener("submit", fillFormAddCardSubmitHandler);
// popupEditButtonElement.addEventListener("click", openEditProfilePopup);
// popupCloseButtonElement.addEventListener("click", closeEditProfilePopup);
// popupAddButtonElement.addEventListener("click", openAddElementPopup);
// popupCloseButtonPlaceElement.addEventListener("click", closeAddElementPopup);
// popupCloseButtonImageElement.addEventListener("click", closeElementPopupImage);
// profilePopup.addEventListener("click", closePopupByClickOnOverlay);
// popupPlaceElement.addEventListener("click", closePopupByClickOnOverlay);
// elementPopupImage.addEventListener("click", closePopupByClickOnOverlay);
