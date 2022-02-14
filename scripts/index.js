const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const openEditProfilePopup = function() {
  popupElement.classList.add('popup_is-opened');
};
const closeEditProfilePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};
// реализуем  заполнение формы - редактирование имени и инфо о себе;
let formElement = document.querySelector('.form');
const profileData = document.querySelector('.profile');
const fieldNameData = document.getElementById('profile-name');
const fieldNameJob = document.getElementById('profile-prophecy');
function formSubmitHandler (evt) {
    evt.preventDefault();
    var userNameInput = fieldNameData.value;
    var userJobInput = fieldNameJob.value;
    profileData.querySelector('.profile__title').textContent = userNameInput;
    profileData.querySelector('.profile__subtitle').textContent = userJobInput;
    closeEditProfilePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);