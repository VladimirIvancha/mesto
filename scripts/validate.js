const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
}

const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');
}

const checkValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    
    console.log(inputElement.name, isInputNotValid, inputElement.validity);

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.form__item');

  inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (event) => {
        checkValidity(formElement, inputElement);
      });
  });
};

const enableValidation = () => {
  const formsList = document.querySelectorAll('.form');

  formsList.forEach(formElement => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });

      setEventListeners(formElement);
  });
};

enableValidation();