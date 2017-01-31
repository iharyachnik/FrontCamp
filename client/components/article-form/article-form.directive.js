angular.module('blog')
  .directive('articleForm', function() {
    return {
      template: require('./article-form.html'),
      controller: 'ArticleFormController',
      controllerAs: 'vm',
      scope: {
        article: '@',
      },
    }
  });