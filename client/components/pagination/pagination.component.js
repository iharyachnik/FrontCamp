angular.module('blog')
  .component('pagination', {
    template: require('./pagination.html'),
    controller: 'PaginationController',
    controllerAs: 'vm',
    bindings: {
      getArticles: '=',
    },
  });