import App from './App';

let instance = null;

// Singleton & view
class Renderer {
  constructor(mediator) {
    if (!instance) {
      this.mediator = mediator;

      instance = this;
    }

    return instance;
  }

  getView() {
    const articles = this.mediator.getArticles();

    return articles.map(article => this.getItem(article)).join('');
  }

  getItem(item) {
    const date = this.getArticleDate(item.publishedAt);

    return (
      `<article>
      <section class="article-header">
        <img src="${item.urlToImage}" />
        <h2>${item.title}</h2>
      </section>
      <section class="article-body">
        <h3>${item.description}</h3>
      </section>
      <section class="article-footer">
        <a href="${item.url}" target="_blank">Read more...</a>
        <span>${item.author} | ${date}</span>
      </section>
     </article>`
    );
  }

  getArticleDate(dateISOString) {
    const MONTHS = ['months-short'];
    const date = new Date(dateISOString);
    const minutes = date.getMinutes();

    return `${date.getHours()}:${minutes > 9 ? minutes : '0' + minutes}, 
    ${MONTHS[date.getMonth()]} ${date.getDate()}`;
  }
}

export default Renderer;