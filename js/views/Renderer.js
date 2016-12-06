import view from './view.html';

import Article from './Article';

// Singleton
class Renderer {
  constructor(mediator, rootElementId) {
    if (!Renderer.instance) {
      this.mediator = mediator;
      this.rootElementId = rootElementId;

      this.article = new Article(view);

      Renderer.instance = this;
    }

    return Renderer.instance;
  }

  getView() {
    const articles = this.mediator.getArticles();

    return articles.map(item => this.article.compile({ item })).join('');
  }

  render() {
    const container = document.getElementById(this.rootElementId);
    const view = this.getView();

    container.innerHTML = view;
  }
}

Renderer.instance = null;

export default Renderer;