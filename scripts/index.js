const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const profilePopup = document.querySelector('.profile-popup');
const profileElement = document.querySelector('.profile');
const popupCloseButtonElement = profilePopup.querySelector('.popup__close');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const formElement = profilePopup.querySelector('.form');
const profileName = profileElement.querySelector('.profile__title');
const profileJob = profileElement.querySelector('.profile__subtitle');
const fieldNameData = profilePopup.querySelector('.form__item-name');
const fieldNameJob = profilePopup.querySelector('.form__item-prophecy');
const popupPlaceElement = document.querySelector('.element-popup');
const formCardElement = popupPlaceElement.querySelector('.form');
const popupCloseButtonPlaceElement = popupPlaceElement.querySelector('.popup__close');
const popupAddButtonElement = profileElement.querySelector('.profile__add-button');
const templateElement = document.querySelector('.item-tamplate').content;
const cardsElements = document.querySelector('.elements');
const fieldNameCard = document.getElementById('element-name');
const fieldNameLink = document.getElementById('element-link');
const elementImage = document.querySelector('.element__image');
const elementPopupImage = document.querySelector('.element-popup-image');
const popupCloseButtonImageElement = elementPopupImage.querySelector('.popup__close');
const titleElementPopup = elementPopupImage.querySelector('.popup__image-title');
const imageElementPopup = elementPopupImage.querySelector('.popup__image');

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}
const openEditProfilePopup = function() {
  openPopup(profilePopup);
  fieldNameData.value = profileName.textContent;
  fieldNameJob.value = profileJob.textContent;
};
const closeEditProfilePopup = function() {
  closePopup(profilePopup);
};
function fillFormSubmitHandler (evt) {
    evt.preventDefault();
    const userNameInput = fieldNameData.value;
    const userJobInput = fieldNameJob.value;
    profileName.textContent = userNameInput;
    profileJob.textContent = userJobInput;
    closePopup(profilePopup);
}
const openAddElementPopup = function() {
  openPopup(popupPlaceElement);
  fieldNameCard.value = "";
  fieldNameLink.value = "";
};
const closeAddElementPopup = function() {
  closePopup(popupPlaceElement);
};
function createCard(element) {
  const cardElement = templateElement.cloneNode(true); 
  const titleElement = cardElement.querySelector('.element__title'); 
  const imageElement = cardElement.querySelector('.element__image');
  titleElement.textContent = element.name;
  imageElement.alt = element.name;
  imageElement.src = element.link;
  setEventDelete(cardElement);
  setEventLike(cardElement);
  setImagePopup(cardElement);
  return cardElement 
}
initialCards.forEach((item) => {
  cardsElements.appendChild(createCard(item));
});
function setEventDelete(cardElement) {
  cardElement.querySelector('.element__delete-button').addEventListener('click', handleDelete);
}
function handleDelete (event) {
  const cardElement = event.target.closest('.element');
  cardElement.remove();
}
function setEventLike(cardElement) {
  cardElement.querySelector('.element__like-icon').addEventListener('click', handleLike);
}
function handleLike (event) {
  const cardElement = event.target.closest('.element__like-icon');
  cardElement.classList.toggle('element__like-icon-active');
}
function setImagePopup (cardElement) {
  cardElement.querySelector('.element__image').addEventListener('click', handlePopup);
}
function handlePopup (event) {
  event.preventDefault();
  openPopup(elementPopupImage);
  const cardElement = event.target.closest('.element');
  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');
  titleElementPopup.textContent = titleElement.textContent;
  imageElementPopup.alt = imageElement.alt;
  imageElementPopup.src = imageElement.src;
}
const closeElementPopupImage = function() {
  closePopup(elementPopupImage);
};
function fillFormAddCardSubmitHandler (evt) {
  evt.preventDefault();
  const userCardInput = {
    name: fieldNameCard.value,
    link: fieldNameLink.value
  };
  cardsElements.prepend(createCard(userCardInput));
  closeAddElementPopup();
}

formElement.addEventListener('submit', fillFormSubmitHandler);
formCardElement.addEventListener('submit', fillFormAddCardSubmitHandler);
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);
popupAddButtonElement.addEventListener('click', openAddElementPopup);
popupCloseButtonPlaceElement.addEventListener('click', closeAddElementPopup);
popupCloseButtonImageElement.addEventListener('click', closeElementPopupImage);