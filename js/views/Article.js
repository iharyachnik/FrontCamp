class Article {
  constructor(template) {
    this.template = template;
  }

  compile(data) {
    data.item.date = Article.formatDate(data.item.publishedAt);

    return this.template
      .replace(/{([\w\.]*)}/g, (match, p1, ...args) => {
        return p1.split('.').reduce((p, c) => p[c], data);
      });
  }

  static formatDate(dateISOString) {
    const MONTHS = ['months-short'];
    const date = new Date(dateISOString);
    const minutes = date.getMinutes();

    return `${date.getHours()}:${minutes > 9 ? minutes : '0' + minutes}, 
      ${MONTHS[date.getMonth()]} ${date.getDate()}`;
  }
}

export default Article;