angular.module('blog')
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeController',
        controllerAs: 'vm',
        resolve: {
          articleTitles: (Articles) => Articles.getTitles().$promise,
        }
      });
  }]);