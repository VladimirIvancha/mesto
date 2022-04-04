import {
  elementPopupImage,
  titleElementPopup,
  imageElementPopup,
  openPopup
} from "./utils.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element');
  }

  createCard() {
    this._element = this._cardTemplate.cloneNode(true);

    this._likeButton = this._element.querySelector(".element__like-icon");
    
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__image").src = this._link;

    this._setEventListeners();

    return this._element;
  }

  _handleLike = () => {
    this._likeButton.classList.toggle("element__like-icon-active");
  }

  _handleDelete = () => {
    this._element.remove();
  }

  _handlePopup() {
    openPopup(elementPopupImage);

    titleElementPopup.textContent = this._name;
    imageElementPopup.alt = this._name;
    imageElementPopup.src = this._link;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handlePopup();
      });
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._handleDelete();
      });
    this._element
      .querySelector(".element__like-icon")
      .addEventListener("click", () => {
        this._handleLike();
      });
  }
}
