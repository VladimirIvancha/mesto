import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    // this.imageElementPopup = this._popupSelector.querySelector(".popup__image");
    // this.titleElementPopup = this._popupSelector.querySelector(".popup__image-title");
  }

  open(data) {
    this.titleElementPopup.textContent = data._name;
    this.imageElementPopup.alt = data._name;
    this.imageElementPopup.src = data._link;

    super.open();
  }

}