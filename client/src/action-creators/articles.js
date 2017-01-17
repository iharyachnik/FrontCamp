export const GET_ARTICLES = 'GET_ARTICLES';

export const fetchArticles = () => (dispatch) => {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(res => dispatch({ type: GET_ARTICLES, articles: res }))
    .catch(err => console.log(err));
};