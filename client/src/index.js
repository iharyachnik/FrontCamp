import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

import './index.scss';

import App from './components/app/App';
import Articles from './components/articles/Articles';
import NewArticle from './components/articles/new-article/NewArticle';
import Home from './components/home/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="articles" component={Articles} />
        <Route path="articles/new" component={NewArticle} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);