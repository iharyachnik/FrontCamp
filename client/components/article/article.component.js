require('./article.scss');

angular.module('blog')
  .component('singleArticle', {
    template: require('./article.html'),
    controller: 'ArticleController',
    controllerAs: 'vm',
    bindings: {
      item: '<',
      getAll: '&',
    },
    bindToController: true,
  });