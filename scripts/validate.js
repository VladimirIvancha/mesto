const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
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
  const formItems = formElement.querySelectorAll(".form__item");
  const inputList = Array.from(formItems);
  const buttonElement = formElement.querySelector(".popup__save-info");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      checkValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const forms = document.querySelectorAll(".form");
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

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-info_inactive");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__save-info_inactive");
    buttonElement.removeAttribute("disabled", true);
  }
};

enableValidation();
