export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = containerSelector;
    }
  
    addItem(item) {
      this._container.prepend(this._renderer(item));
    }
  
    clear() {
      this._container.innerHTML = '';
    }
  
    renderItems() {
      this.clear();
  
      this._renderedItems.forEach(item => {
        this._container.prepend(this._renderer(item));
      });
    }
  }