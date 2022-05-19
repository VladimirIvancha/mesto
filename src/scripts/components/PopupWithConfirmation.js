import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithConfirmation extends PopupWithForm {
   constructor(popupSelector) {
    super(popupSelector, ()=>this._onSubmit());
  }

  _onSubmit () {
    return this._submitCallbackConfirmation()
  }

  open(callback) {
    this._submitCallbackConfirmation = callback;
    super.open();
  }

}