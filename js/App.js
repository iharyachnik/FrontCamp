import settings from './settings';

import Loader from './Loader';
import Renderer from './Renderer';
import Storage from './Storage';

// Facade & mediator
class App {
  constructor() {
    this.url = settings.apiUrl;
    this.rootElementId = settings.rootElementId;

    this.renderer = new Renderer(this.rootElementId, this);
    this.storage = new Storage();

    this.button = document.getElementById("button");
    this.spinner = document.getElementById("spinner");

    this.button.addEventListener('click', this.run.bind(this));
  }

  run() {
    this.button.className = "hidden";
    this.spinner.className = "spinner";

    const renderer = new Renderer(this.rootElementId);

    Loader.getData(this.url)
      .then(data => this.storage.set('data', data))
      .then(() => renderer.render());
  }

  getArticles() {
    return this.storage.get('data');
  }
}

export default App;