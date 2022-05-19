export default class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: this._headers,
        })
          .then(this._checkResponse)
          .then((result) => {
            return result;
          });
    }
    
    patchUserInfo({ name, prophecy }) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            about: prophecy,
          }),
        }).then(this._checkResponse);
    }
    
    patchUserAvatar(linkOfAvatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            avatar: linkOfAvatar,
          }),
        }).then(this._checkResponse);
    }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers,
        })
          .then(this._checkResponse)
          .then((result) => {
            return result;
          });
    }
    
    postCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            link: link,
          }),
        }).then(this._checkResponse);
      
    }
      
    deleteCard(card) {
        return fetch(`${this._baseUrl}/cards/${card.getId()}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._checkResponse);
    }
    
    putLike(card) {
        return fetch(`${this._baseUrl}/cards/${card.getId()}/likes`, {
          method: "PUT",
          headers: this._headers,
        }).then(this._checkResponse);
    }
    
    deleteLike(card) {
        return fetch(`${this._baseUrl}/cards/${card.getId()}/likes`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._checkResponse);
    }
}