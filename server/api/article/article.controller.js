import articleService from './article.service';

export const index = (req, res, next) => {
  return articleService.getArticles()
    .then(articles => res.json(articles))
    .catch(err => next(err));
}

export const titles = (req, res, next) => {
  return articleService.getTitles()
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

  return articleService.deleteArticle(id)
    .then(() => res.status(200).end())
    .catch(err => next(err));
}

export const getOne = (req, res, next) => {
  const {id} = req.params;

  return articleService.getArticle(id)
    .then(article => res.json(article))
    .catch(err => next(err));
}

export const update = (req, res, next) => {
  const {id} = req.params;
  const item = req.body;

  return articleService.update(id, item)
    .then(article => res.json(article))
    .catch(err => next(err));
}