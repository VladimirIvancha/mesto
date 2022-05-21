import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";

import {
  profilePopup,
  popupEditButtonElement,
  popupPlaceElement,
  popupAddButtonElement,
  cardListSection,
  profileSelector,
  addCardSelector,
  popupWithImageSelector,
  userInfoSelector,
  deleteCardPopupSelector,
  editAvatarPopupSelector,
  editAvatarButton,
  popupAvatar,
  validationConfig,
} from "../scripts/utils/utils.js";

//Работа с api
const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41",
    headers: {
      authorization: "ab243ec9-3aed-4ed2-9077-4cc2ab0d2543",
      "Content-Type": "application/json",
    },
});

//Загрузка данных профиля
const userInfo = new UserInfo(userInfoSelector);

//Попап с увеличенным видом картинки
const popupBigImage = new PopupWithImage(popupWithImageSelector);
popupBigImage.setEventListeners();

// Подгрузка данных пользователя и карточек
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo({
      name: user.name,
      prophecy: user.about,
      avatar: user.avatar,
      _id: user._id,
    });
    cardSection.renderItems(cards);
  })
  .catch((err) => {
    { console.log(err) };
  });

// Валидация
const editProfileValidator = new FormValidator(
    validationConfig,
    profilePopup
);
const addCardValidator = new FormValidator(
    validationConfig, 
    popupPlaceElement
);

const editAvatarValidator = new FormValidator(
    validationConfig, 
    popupAvatar
);

// Работа с карточками

function deleteCardApi(card) {
    popupDeleteCard.renderLoading(true, "Удаление карточки...");
    return api
      .deleteCard(card)
      .then((res) => {
        card.deleteSelf();
      })
      .catch((err) => {
        alert("Ошибка удаления карточки! Что-то пошло не так!");
      })
      .finally(() => popupDeleteCard.renderLoading(false));
}
  
function toggleLikeApi(card) {
    if (card.getLikedByMe()) {
      api
        .deleteLike(card)
        .then((res) => {
          card.updateLikes(res.likes, false);
        })
        .catch((err) => {
          alert("Ошибка! Что-то пошло не так!");
        });
    } else {
      api
        .putLike(card)
        .then((res) => {
          card.updateLikes(res.likes, true);
        })
        .catch((err) => {
          alert("Ошибка! Что-то пошло не так!");
        });
    }
}
  
const createCard = (item) => {
    const myId = userInfo.getUserId();
    const argsCard = {
      item,
      deletable: myId === item.owner._id,
      likedByMe: item.likes.some((likeitem) => likeitem._id == myId),
      cardSelector: "#template",
      handleCardClick: popupBigImage.open.bind(popupBigImage),
      handleTrashClick: (card) => {
        popupDeleteCard.open(() => deleteCardApi(card));
      },
      handleLikeClick: (card) => toggleLikeApi(card),
    };
    const card = new Card(argsCard);
    return card.generateCard();
};
  
const cardSection = new Section(
    (item) => {
    return createCard(item);
}, cardListSection);

// Попап редактирования аватара
const popupEditAvatar = new PopupWithForm(
    editAvatarPopupSelector,
    (popup, { "avatar-link": avatar }) => {
      popup.renderLoading(true, "Сохранение аватара...");
      return api
        .patchUserAvatar(avatar)
        .then((res) => {
          userInfo.setUserInfo({ avatar });
        })
        .catch((err) => {
          alert("Что-то пошло не так! Mesto не смог сохранить аватар.");
        })
        .finally(() => popup.renderLoading(false));
    }
);

popupEditAvatar.setEventListeners()

editAvatarButton.addEventListener("click", () => {
    editAvatarValidator.checkFormValidity();
    popupEditAvatar.open();
});
  
// Попап удаления карточки
const popupDeleteCard = new PopupWithConfirmation(deleteCardPopupSelector);
popupDeleteCard.setEventListeners();

// Попап редактирования данных профиля
const popupEditProfile = new PopupWithForm(
    profileSelector, 
    (popup, { name, prophecy }) => {
        popup.renderLoading(true, "Сохранение...");
        return api
          .patchUserInfo({ name, prophecy })
          .then(({ name, about }) => {
            userInfo.setUserInfo({ name, prophecy: about });
          })
          .catch((err) => {
            alert("Ой! Что-то пошло не так! Mesto не смог сохранить ваше имя");
          })
          .finally(() => popup.renderLoading(false));
})

popupEditButtonElement.addEventListener('click', () => {
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    editProfileValidator.checkFormValidity();
    popupEditProfile.open(); 
})

popupEditProfile.setEventListeners()

// //Попап добавления новой карточки
const popupAddCard = new PopupWithForm(
    addCardSelector, 
    (popup, {'element-name': name, 'element-link': link}) => {
        popup.renderLoading(true, "Сохранение карточки...");
        return api
          .postCard({ name, link })
          .then((item) => {
            cardSection.addItem(item);
          })
          .catch((err) => {
            alert("Что-то пошло не так с добавлением новой карточки");
          })
          .finally(() => popup.renderLoading(false));
})

popupAddCard.setEventListeners()

popupAddButtonElement.addEventListener('click', () => {
    addCardValidator.checkFormValidity();
    popupAddCard.open();
})

addCardValidator.enableValidation();
editProfileValidator.enableValidation();
editAvatarValidator.enableValidation();

