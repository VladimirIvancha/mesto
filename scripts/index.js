const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
let formElement = popupElement.querySelector('.form');
const profileData = document.querySelector('.profile');
let profileName = profileData.querySelector('.profile__title');
let profileJob = profileData.querySelector('.profile__subtitle');
let fieldNameData = document.getElementById('profile-name');
let fieldNameJob = document.getElementById('profile-prophecy');
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
formElement.addEventListener('submit', formSubmitHandler);
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);