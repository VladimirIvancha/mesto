import { openPopup, elementPopupImage, titleElementPopup, imageElementPopup } from './index.js';

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content
          .cloneNode(true);
    
        return cardElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this.likeButton = this._element.querySelector('.element__like-icon');
        this.deleteButton = this._element.querySelector('.element');
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;

        return this._element;
    }

    _handleLike() {
        this.likeButton.classList.toggle('element__like-icon-active');
    }

    _handleDelete(event) {
        this.deleteButton.remove();
    }

    _handlePopup() {
        openPopup(elementPopupImage);
        
        titleElementPopup.textContent = this._name;
        imageElementPopup.alt = this._name;
        imageElementPopup.src = this._link;
    }

    _setEventListeners() {
        this._element.querySelector(".element__image").addEventListener('click', () => {
            this._handlePopup();
        });
        this._element.querySelector(".element__delete-button").addEventListener('click', () => {
            this._handleDelete();
        });
        this._element.querySelector(".element__like-icon").addEventListener('click', () => {
            this._handleLike();
        });
    }
}