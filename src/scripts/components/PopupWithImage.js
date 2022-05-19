import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.imageElementPopup = this._popup.querySelector(".popup__image");
    this.titleElementPopup = this._popup.querySelector(".popup__image-title");
  }

  open(item) {
    this.titleElementPopup.textContent = item._name;
    this.imageElementPopup.alt = item._name;
    this.imageElementPopup.src = item._link;
    super.open();
  }

}