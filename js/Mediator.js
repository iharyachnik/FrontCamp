import Renderer from './views/Renderer';
import Loader from './utils/Loader';
import Storage from './models/Storage';
import App from './controllers/App';

// Mediator & model
class Mediator {
  constructor(settings) {
    if (!Mediator.instance ) {
      this.url = settings.apiUrl;

      this.Loader = Loader;
      this.storage = new Storage();
      this.renderer = new Renderer(this, settings.rootElementId);
      this.app = new App(this);
    
      Mediator.instance = this;
    }

    return Mediator.instance;
  }

  loadData() {
    return this.Loader.getData(this.url)
      .then(data => this.storage.setArticles(data));
  }

  render() {
    this.renderer.render();
  }

  getArticles() {
    return this.storage.getArticles();
  }

  start() {
    this.app.run();
  }
}

export default Mediator;