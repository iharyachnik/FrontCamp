export const GET_ARTICLES = 'GET_ARTICLES';

export const fetchArticles = () => (dispatch) => {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(res => dispatch({ type: GET_ARTICLES, articles: res }))
    .catch(err => console.log(err));
};

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const createArticle = (title, body) => (dispatch) => {
  const data = JSON.stringify({
    title,
    body,
  });

  return fetch('/api/articles/create', {
    method: 'POST',
    body: data,
  })
    .then(res => fetchArticles())
    .catch(err => console.log(err));
};