import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popup) {
    super(popup);
    this.imageElementPopup = this._popup.querySelector(".popup__image");
    this.titleElementPopup = this._popup.querySelector(".popup__image-title");
  }

  open(data) {
    super.open();
    this.titleElementPopup.textContent = data.name;
    this.imageElementPopup.alt = data.name;
    this.imageElementPopup.src = data.link;
  }

}