import BaseService from '../base.service';

import ArticleModel from '../../database/models/article';

class ArticleService extends BaseService {

  createArticle(title, body, image, author) {
    return this
      .create({
        title,
        body,
        image,
        author
      })
      .catch(err => console.log(err));
  }

  getArticles(pageSize, page) {
    return this.getAll()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
  }

  getTitles() {
    return this.getAll().select({ title: 1 });
  }

  deleteArticle(id) {
    return this.deleteById(id);
  }

  getArticle(id) {
    return this.getById(id);
  }

  update(id, item) {
    return this.updateById(id, item);
  }

  getCount() {
    return this.count({});
  }
}

export default new ArticleService(ArticleModel);