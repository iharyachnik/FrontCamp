'use strict';

angular
  .module('Blog', [
    'ngCookies',
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })      
      .when('/articles', {
        templateUrl: 'articles/articles.html',
        controller: 'ArticlesController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  });
