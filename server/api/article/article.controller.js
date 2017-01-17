import articleService from './article.service';

export const index = (req, res, next) => {
  return articleService.getArticles()
    .then(articles => res.json(articles))
    .catch(err => next(err));
}

export const create = (req, res, next) => {
  const {title, body, user: author, image} = req.body;

  return articleService.createArticle(title, body, image, author)
    .then(article => res.json(article))
    .catch(err => next(err));
}

export const remove = (req, res, next) => {
  const {id} = req.params;

  console.log(id);

  return articleService.deleteArticle(id)
    .then(() => res.status(200).end())
    .catch(err => next(err));
}