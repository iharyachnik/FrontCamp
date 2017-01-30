require('./article-form.scss');

angular.module('blog')
  .controller('ArticleFormController', ['Articles', '$scope', '$state', function (Articles, $scope, $state) {
    this.title = '';
    this.image = '';
    this.body = '';

    this.create = () => {
      if (!$scope.newForm.$valid) {
        this.titleInvalid = !$scope.newForm.title.$valid;
        this.bodyInvalid = !$scope.newForm.body.$valid;
        return;
      }

      Articles.create({
        title: this.title,
        image: this.image,
        body: this.body,
      })
      .$promise
      .then(() => $state.go('articles'));
    }
  }]);
