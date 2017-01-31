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
      })
      .state('articles-edit', {
        url: 'articles/:id/edit',
        template: require('../article/edit-article.html'),
        controller: 'EditArticleController',
        controllerAs: 'vm',
        resolve: {
          article: ($stateParams, Articles) => {
            const {id} = $stateParams;

            return Articles.getById({ id }).$promise;
          },
        },
      });
  }]);