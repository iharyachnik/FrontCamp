angular.module('blog')
  .component('mainHeader', {
    template: require('./header.html'),
    controller: 'HeaderController',
    controllerAs: 'vm'
  });