angular.module('blog')
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('articles', {
        url: '/articles',
        template: require('./articles.html'),
        controller: 'ArticlesController',
        controllerAs: 'vm',
      })
      .state('articles-new', {
        url: 'articles/new',
        template: require('../article/new-article.html'),
      });
  }]);