angular.module('blog')
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('articles', {
        url: '/articles',
        template: require('./articles.html'),
        controller: 'ArticlesController',
        controllerAs: 'vm',
      });
  }]);