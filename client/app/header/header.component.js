'use strict';

angular.module('Blog')
  .component('mainHeader', {
    templateUrl: '/header/header.html',
    controller: 'HeaderController',
    controllerAs: 'vm'
  });