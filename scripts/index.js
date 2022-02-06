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
