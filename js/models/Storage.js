// Model
class Storage {
  constructor() {
    this.map = new Map();
  }

  get(key) {
    return this.map.get(key);
  }

  set(key, value) {
    this.map.set(key, value);
  }

  setArticles(articles) {
    this.set('articles', articles)
  }

  getArticles() {
    return this.get('articles');
  }
}

export default Storage;