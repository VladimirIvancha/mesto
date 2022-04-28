import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.imageElementPopup = this._popup.querySelector(".popup__image");
    this.titleElementPopup = this._popup.querySelector(".popup__image-title");
  }

  open(data) {
    this.titleElementPopup.textContent = data.name;
    this.imageElementPopup.alt = data.name;
    this.imageElementPopup.src = data.link;
    super.open();
  }

}