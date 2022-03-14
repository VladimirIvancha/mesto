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

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));

  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.popup__save-info');

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (event) => {
        checkValidity(formElement, inputElement);

        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(inputList, buttonElement);
      });
  });
};

const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll('.form'));

  formsList.forEach(formElement => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });

      setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  }; 

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('popup__save-info_inactive');
      buttonElement.setAttribute("disabled", true);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__save-info_inactive');
      buttonElement.removeAttribute("disabled");
    }
  }; 

enableValidation();