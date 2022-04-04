export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._formItems = this._form.querySelectorAll(this._settings.inputSelector);
    this._inputList = Array.from(this._formItems);
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector); 
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = "";
    errorElement.classList.remove(this._settings.errorClass);
  }

  _checkValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;

      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.removeAttribute("disabled", true);
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._inputList, this._submitButton, this._settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (event) => {
        this._checkValidity(inputElement);
        this._toggleButtonState(this._inputList, this._submitButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  }
}
