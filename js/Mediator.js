import settings from './settings';

import Storage from './Storage';
import Renderer from './Renderer';
import Loader from './Loader';
import App from './App';

let instance = null;

// Mediator & model
class Mediator {
  constructor() {
    if (instance !== null) {
      return instance;
    }

    this.url = settings.apiUrl;
    this.rootElementId = settings.rootElementId;

    this.storage = new Storage();
    this.renderer = new Renderer(this);
    this.app = new App(this);
  }

  loadData() {
    return Loader.getData(this.url)
      .then(data => this.storage.setArticles(data));
  }

  render() {
    const container = document.getElementById(this.rootElementId);
    const view = this.renderer.getView();

    container.innerHTML = view;    
  }

  getArticles() {
    return this.storage.getArticles();
  }
}

export default Mediator;