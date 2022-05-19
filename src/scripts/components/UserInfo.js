export default class UserInfo {
    constructor (userInfoSelector) {
        this._userName = document.querySelector(userInfoSelector.name);
        this._userProphecy = document.querySelector(userInfoSelector.prophecy);
        this._userAvatar = document.querySelector(userInfoSelector.avatar);
    }
    
    getUserInfo () {
        this._userInfo = {
            name: this._userName.textContent,
            prophecy: this._userProphecy.textContent,
        }
        
        return this._userInfo
    }
    
    setUserInfo({ name, prophecy, avatar, _id }) {
        if (name) {
          this._userName.textContent = name;
        }
        if (prophecy) {
          this._userProphecy.textContent = prophecy;
        }
        if (avatar) {
          this._userAvatar.style["background-image"] = `url('${avatar}')`;
        }
        if (_id) {
          this._id = _id
        }
    }
      
    getUserId() {
        return this._id;
    }
}