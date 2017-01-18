export const GET_ARTICLES = 'GET_ARTICLES';

export const fetchArticles = () => (dispatch) => {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(res => dispatch({ type: GET_ARTICLES, articles: res }))
    .catch(err => console.log(err));
};

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const createArticle = (title, body, image) => (dispatch) => {
  const data = JSON.stringify({
    title,
    body,
    image,
  });

  return fetch('/api/articles/create', {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .catch(err => console.log(err));
};

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const deleteArticle = (id) => (dispatch) => {
  return fetch(`api/articles/delete/${id}`, {
    method: 'DELETE',
  })
    .then(res => dispatch(fetchArticles()))
    .catch(err => console.log(err));
};