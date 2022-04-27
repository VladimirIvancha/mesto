export default class UserInfo {
    constructor (userInfoSelector) {
        this._userName = document.querySelector(userInfoSelector.name);
        this._userProphecy = document.querySelector(userInfoSelector.prophecy);
    }
    
    getUserInfo () {
        const userInfo = {
            name: this._userName.textContent,
            prophecy: this._userProphecy.textContent,
        }
        
        return userInfo
    }
    
    setUserInfo ({name, prophecy}) {
        this._userName.textContent = name;
        this._userProphecy.textContent = prophecy;
    }
}