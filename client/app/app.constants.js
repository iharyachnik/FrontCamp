const ROUTES = {
  main: {
    title: 'Home',
    state: 'main',
    url: '/',
  },
  articles: {
    title: 'Articles',
    state: 'articles',
    url: '/articles',
  },
};

const CONSTANTS = {
  routes: ROUTES
};

angular
  .module('Blog')
  .constant('appConstants', CONSTANTS);