angular.module('blog', ['ui.router', 'ngResource'])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }]);
