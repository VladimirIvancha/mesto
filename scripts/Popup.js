export default class Popup {
    constructor (popupSelector) {
      this._popupSelector = popupSelector;
      // this._closePopupButton = this._popupSelector.querySelector(".popup__close");
      this._form = this._popupSelector.querySelector(".form");
      this._inputList = this._popupSelector.querySelectorAll(".form__item");
      this.imageElementPopup = this._popupSelector.querySelector(".popup__image");
      this.titleElementPopup = this._popupSelector.querySelector(".popup__image-title");

      this.setEventListeners();
    }

    open() {
      this._popupSelector.classList.add("popup_is-opened");
      document.addEventListener("keydown", this._handleEscClose)
    }

    close() {
      this._popupSelector.classList.remove("popup_is-opened");
      document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    }

    // _handleOverlayClose = (evt) => {
    //   if (evt.target !== evt.currentTarget) {
    //     return;
    //   }
    //   this.close(evt.target);
    // }

    setEventListeners() {
      this._popupSelector.addEventListener("mousedown", (evt) => {
        if (
          evt.target.classList.contains("popup_is-opened") ||
          evt.target.classList.contains("popup__close")
        ) {
          this.close();
        }
      });
      // this._popupSelector.addEventListener("click", () => {
      //   this._handleOverlayClose();
      // });
    }
}