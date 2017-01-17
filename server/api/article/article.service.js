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

  getArticles() {
    return this.getAll();
  }

  deleteArticle(id) {
    return this.deleteById(id);
  }
}

export default new ArticleService(ArticleModel);