import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll(".form__item");
    this._submitButton = this._popup.querySelector(".popup__button-text");
    this._submitButtonInitialText = this._submitButton.textContent;
  }

  _getInputValues() {
    const valuesForms = {};
    this._inputList.forEach(input => {
      valuesForms[input.name] = input.value
    })
    return valuesForms
  }

  setInputValues (values) {
    this._inputList.forEach(input => {
      if (values[input.name] != undefined){
        input.value = values[input.name];
      }
    });
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this, this._getInputValues()).then(() => this.close())
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading, buttonText='Сохранение...') {
    if(isLoading) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonInitialText;
    }
  }
}