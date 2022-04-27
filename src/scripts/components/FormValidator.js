export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
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

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.setAttribute("disabled", true)
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
      this._submitButton.removeAttribute("disabled")
    }
  }

  checkFormValidity = () => {
    this._toggleButtonState();
    this._inputList.forEach(inputElement => {
      this._hideError(inputElement)
    })
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

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  }
}
