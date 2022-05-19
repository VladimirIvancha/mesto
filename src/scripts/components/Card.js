
export default class Card {
  constructor({
    data,
    deletable,
    likedByMe,
    cardSelector,
    handleCardClick,
    handleTrashClick,
    handleLikeClick,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._deletable = deletable;
    this._likedByMe = likedByMe;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;

    this._element = this._getTemplate(cardSelector);
    this._locationImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like-icon");
    this._trashButton = this._element.querySelector(".element__delete-button");
    this._elementLikesValue = this._element.querySelector(".element__like-value");
    this._cardTitle = this._element.querySelector(".element__title");
  }

  getLikedByMe() {
    return this._likedByMe;
  }

  getId() {
    return this._id;
  }

  _getTemplate(cardSelector) {
    return document
      .querySelector(cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._handleLikeClick(this);
  }

  _handleImageClick() {
    this._handleCardClick(this);
  }

  _handleTrashButton() {
    this._handleTrashClick(this);
  }

  _setEventListeners() {
    this._likeButton
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
      this._locationImage
      .addEventListener("click", () => {
        this._handleImageClick();
      });
    if (this._trashButton) {
      this._trashButton.addEventListener("click", () => {
        this._handleTrashButton();
      });
    }
  }

  deleteSelf() {
    this._element.remove();
  }

  updateLikes(likes, likedByMe) {
    const likesValue = likes.length;
    this._likedByMe = likedByMe;

    if (likedByMe) {
      this._likeButton
        .classList.add("element__like-icon-active");
    } else {
      this._likeButton
        .classList.remove("element__like-icon-active");
    }

    if (likesValue) {
      this._elementLikesValue.textContent = likesValue;
    } else this._elementLikesValue.textContent = "";
  }

  generateCard() {

    this.updateLikes(this._likes, this._likedByMe);

    if (!this._deletable) {
      this._trashButton.remove();
    }

    this._locationImage.src = this._link;
    this._locationImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

}
