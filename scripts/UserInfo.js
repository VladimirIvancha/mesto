export default class UserInfo {
    constructor (nameSelector, prophecySelector) {
        this._nameArea = nameSelector;
        this._prophecyArea = prophecySelector;
    }
    
    getUserInfo () {
        return {
            name: this._nameArea.textContent, 
            prophecy: this._prophecyArea.textContent
        };
    }
    
    setUserInfo ({name, prophecy}) {
        this._nameArea.textContent = name;
        this._prophecyArea.textContent = prophecy;
    }
}