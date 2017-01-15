import * as ARTICLES_ACTION_TYPES from '../action-creators/articles';

const articles = (state = {}, action) => {
  let newState = state;

  switch (action.type) {
    case ARTICLES_ACTION_TYPES.GET_ARTICLES:
      newState = getArticles(newState, action.articles);
      break;
    default:
  }

  return newState;
};

const getArticles = (state, articles) => {
  return Object.assign({}, state, { items: articles });
};

export default articles;