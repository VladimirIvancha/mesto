const enableValidation = ({
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.popup__save-info',
    inactiveButtonClass: 'popup__save-info_inactive',
    errorClass: 'form__input-error_active'
}); 

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidation.errorClass);
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = "";
  errorElement.classList.remove(enableValidation.errorClass);
};

const checkValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const formItems = formElement.querySelectorAll(enableValidation.inputSelector);
  const inputList = Array.from(formItems);
  const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, enableValidation);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      checkValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement, enableValidation);
    });
  });
};

const checkValidation = () => {
  const forms = document.querySelectorAll(enableValidation.formSelector);
  const formsList = Array.from(forms);

  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, enableValidation) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(enableValidation.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
};

checkValidation();
