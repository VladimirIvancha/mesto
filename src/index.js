import "./index.css";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";

import {
  initialCards,
  profilePopup,
  popupEditButtonElement,
  formProfileElement,
  profileName,
  profileJob,
  popupPlaceElement,
  formCardElement,
  popupAddButtonElement,
  cardsElements,
  fieldNameCard,
  fieldNameLink,
  elementPopupImage,
} from "./scripts/utils/utils.js";



//Попап с увеличенным видом картинки
const popupWithImage = new PopupWithImage(elementPopupImage);
popupWithImage.setEventListeners();

//функция для создания карточки
const addNewCard = (data) => {
    const card = new Card(data, ".item-tamplate", popupWithImage.open.bind(popupWithImage));
    return card;
};

//Отрисовка начальных карточек
const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const card = addNewCard(cardItem);
        const cardElement = card.createCard()
        cardsList.addItem(cardElement);
    }
}, 
cardsElements
);

cardsList.renderItems();

//Загрузка данных профиля
const copyProfileData = new UserInfo(profileName, profileJob);

//Попап редактирования данных профиля
const popupEditProfile = new PopupWithForm(profilePopup, ({name, prophecy}) => {
    copyProfileData.setUserInfo({name, prophecy});
    popupEditProfile.close();
})

popupEditButtonElement.addEventListener('click', () => {
    popupEditProfile.setInputValues(copyProfileData.getUserInfo());
    popupEditProfile.open();
    editProfileValidator.enableValidation();
})

popupEditProfile.setEventListeners()

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

//Попап добавления новой карточки
const popupAddCard = new PopupWithForm(popupPlaceElement, () => {
    const item = {
        name: fieldNameCard.value,
        link: fieldNameLink.value,
    };
    cardsList.addItem(addNewCard(item).createCard());
    popupAddCard.close();
})

popupAddCard.setEventListeners()

popupAddButtonElement.addEventListener('click', () => {
    popupAddCard.open();
    addCardValidator.enableValidation();
})


