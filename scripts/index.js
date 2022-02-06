const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const openEditProfilePopup = function() {
  popupElement.classList.add('popup_is-opened');
};
const closeEditProfilePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};
popupEditButtonElement.addEventListener('click', openEditProfilePopup);
popupCloseButtonElement.addEventListener('click', closeEditProfilePopup);

// реализуем замену сердечка (like) на черное (только первое - нужно доработать);
const likeUnlikeElement = document.querySelector('.element__group');
const toggleLikeUnlike = function() {
    likeUnlikeElement.classList.toggle('element__group_black');
};
likeUnlikeElement.addEventListener('click', toggleLikeUnlike);

// реализуем  заполнение формы - редактирование имени и инфо о себе;
let formElement = document.querySelector('.popup__save-info');
function formSubmitHandler (evt) {
    evt.preventDefault();
    var userNameInput = document.getElementById('profile-name').value;
    var userJobInput = document.getElementById('profile-prophecy').value;
    document.querySelector('.profile__title').innerHTML = userNameInput;
    document.querySelector('.profile__subtitle').innerHTML = userJobInput;
    closeEditProfilePopup();
}
formElement.addEventListener('click', formSubmitHandler);
