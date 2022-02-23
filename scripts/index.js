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
const popupPlaceElement = document.querySelector('.element__popup');
const popupCloseButtonPlaceElement = popupPlaceElement.querySelector('.popup__close');
const popupAddButtonElement = profileElement.querySelector('.element__add-button');
const templateElement = document.querySelector('.item__tamplate').content;
const cardsElements = document.querySelector('.elements');


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
};
const closeAddElementPopup = function() {
  popupPlaceElement.classList.remove('popup_is-opened');
};
function renderCard(element) {
  const cardElement = templateElement.cloneNode(true);
  const titleElement = cardElement.querySelector('.element__title');

  setEventListeners(cardElement);

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

formElement.addEventListener('submit', formSubmitHandler);
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);
popupAddButtonElement.addEventListener('click', openAddElementPopup);
popupCloseButtonPlaceElement.addEventListener('click', closeAddElementPopup);
renderItems(initialCards);