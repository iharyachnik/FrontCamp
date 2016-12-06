import App from './App';
import view from './app.html';

// Singleton
class Renderer {
  constructor(mediator) {
    if (!Renderer.instance) {
      this.mediator = mediator;

      Renderer.instance = this;
    }

    return Renderer.instance;
  }

  getView() {
    const articles = this.mediator.getArticles();

    return articles.map(article => this.getItem.call({ item: article })).join('');
  }

  getItem() {
    this.item.date = Renderer.getArticleDate(this.item.publishedAt);

    return view.replace(/{([\w\.]*)}/g, (match, p1, ...args) => {
      return p1.split('.').reduce((p, c) => p[c], this);
    });
  }

  static getArticleDate(dateISOString) {
    const MONTHS = ['months-short'];
    const date = new Date(dateISOString);
    const minutes = date.getMinutes();

    return `${date.getHours()}:${minutes > 9 ? minutes : '0' + minutes}, 
    ${MONTHS[date.getMonth()]} ${date.getDate()}`;
  }
}

Renderer.instance = null;

export default Renderer;