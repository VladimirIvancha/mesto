import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  open(data) {
    this.titleElementPopup.textContent = data._name;
    this.imageElementPopup.alt = data._name;
    this.imageElementPopup.src = data._link;

    super.open();
  }

}