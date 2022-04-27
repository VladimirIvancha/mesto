import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";

import {
  initialCards,
  profilePopup,
  popupEditButtonElement,
  popupPlaceElement,
  popupAddButtonElement,
  cardListSection,
  profileSelector,
  addCardSelector,
  popupWithImageSelector,
  userInfoSelector,
} from "../scripts/utils/utils.js";



//Попап с увеличенным видом картинки
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

//функция для создания карточки
const addNewCard = (data) => {
    const card = new Card(data, ".item-tamplate", () => popupWithImage.open(data));
    return card.createCard();
};

//Отрисовка начальных карточек
const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const card = addNewCard(cardItem);
        cardsList.addItem(card);
    }
}, 
cardListSection
);

cardsList.renderItems();

//Загрузка данных профиля
const copyProfileData = new UserInfo(userInfoSelector);

//Попап редактирования данных профиля
const popupEditProfile = new PopupWithForm(profileSelector, (formData) => {
    copyProfileData.setUserInfo(formData);
    popupEditProfile.close();
})

popupEditButtonElement.addEventListener('click', () => {
    popupEditProfile.setInputValues(copyProfileData.getUserInfo());
    popupEditProfile.open();
    editProfileValidator.checkFormValidity();
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
    profilePopup
);
const addCardValidator = new FormValidator(
    validationConfig, 
    popupPlaceElement
);

//Попап добавления новой карточки
const popupAddCard = new PopupWithForm(addCardSelector, ({'element-name': name, 'element-link': link}) => {
    cardsList.addItem(addNewCard({name:name, link:link}));
    popupAddCard.close();
})

popupAddCard.setEventListeners()

popupAddButtonElement.addEventListener('click', () => {
    popupAddCard.open();
    addCardValidator.checkFormValidity();
})

addCardValidator.enableValidation();
editProfileValidator.enableValidation();

