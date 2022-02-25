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

const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
let formElement = popupElement.querySelector('.form');
let profileName = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let fieldNameData = document.getElementById('profile-name');
let fieldNameJob = document.getElementById('profile-prophecy');
const popupPlaceElement = document.querySelector('.element-popup');
let formCardElement = popupPlaceElement.querySelector('.form');
const popupCloseButtonPlaceElement = popupPlaceElement.querySelector('.popup__close');
const popupAddButtonElement = profileElement.querySelector('.profile__add-button');
const templateElement = document.querySelector('.item-tamplate').content;
const cardsElements = document.querySelector('.elements');
let fieldNameCard = document.getElementById('element-name');
let fieldNameLink = document.getElementById('element-link');
const elementImage = document.querySelector('.element__image');
const elementPopupImage = document.querySelector('.element-popup-image');
const popupCloseButtonImageElement = elementPopupImage.querySelector('.popup__close');

const openEditProfilePopup = function() {
  popupElement.classList.add('popup_is-opened');
  fieldNameData.value = profileName.textContent;
  fieldNameJob.value = profileJob.textContent;
};
const closeEditProfilePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};
function formSubmitHandler (evt) {
    evt.preventDefault();
    var userNameInput = fieldNameData.value;
    var userJobInput = fieldNameJob.value;
    profileName.textContent = userNameInput;
    profileJob.textContent = userJobInput;
    closeEditProfilePopup();
}
const openAddElementPopup = function() {
  popupPlaceElement.classList.add('popup_is-opened');
  fieldNameCard.value = "";
  fieldNameLink.value = "";
};
const closeAddElementPopup = function() {
  popupPlaceElement.classList.remove('popup_is-opened');
};
function renderCard(element) {
  const cardElement = templateElement.cloneNode(true);
  const titleElement = cardElement.querySelector('.element__title');

  setEventListeners(cardElement);
  setEventLike(cardElement);
  setImagePopup(cardElement);

  titleElement.textContent = element.name;
  const imageElement = cardElement.querySelector('.element__image');
  imageElement.src = element.link;
  cardsElements.appendChild(cardElement);
};
function renderItems(initialCards) {
  initialCards.forEach(renderCard);
};
function setEventListeners(cardElement) {
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
  elementPopupImage.classList.add('popup_is-opened');
  const cardElement = event.target.closest('.element');
  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');
  const titleElementPopup = elementPopupImage.querySelector('.popup__image-title');
  const imageElementPopup = elementPopupImage.querySelector('.popup__image');
  titleElementPopup.textContent = titleElement.textContent;
  imageElementPopup.src = imageElement.src;
}
const closeElementPopupImage = function() {
  elementPopupImage.classList.remove('popup_is-opened');
};
function formAddCardSubmitHandler (evt) {
  evt.preventDefault();
  var userCardUnput = fieldNameCard.value;
  var userLinkInput = fieldNameLink.value;
  cardsElements.insertAdjacentHTML("afterbegin", `
  <article class="element">
    <img src="${userLinkInput}" class="element__image" alt="добавленное изображение">
      <button type="button" aria-label="удалить" class="element__delete-button"></button>
    <div class="element__wrapper">
      <h2 class="element__title">${userCardUnput}</h2>
      <button type="button" aria-label="лайкнуть" class="element__like-icon"></button>
    </div>
  </article>
  `)
  const cardButtonDelete = document.querySelector('.element__delete-button');
  const cardButtonLike = document.querySelector('.element__like-icon');
  const cardOpenImagePopup = document.querySelector('.element__image');
  cardButtonDelete.addEventListener('click', handleDelete);
  cardButtonLike.addEventListener('click', handleLike);
  cardOpenImagePopup.addEventListener('click', handlePopup);
  closeAddElementPopup();
}

formElement.addEventListener('submit', formSubmitHandler);
formCardElement.addEventListener('submit', formAddCardSubmitHandler);
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);
popupAddButtonElement.addEventListener('click', openAddElementPopup);
popupCloseButtonPlaceElement.addEventListener('click', closeAddElementPopup);
popupCloseButtonImageElement.addEventListener('click', closeElementPopupImage);
renderItems(initialCards);