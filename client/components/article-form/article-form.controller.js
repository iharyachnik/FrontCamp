require('./article-form.scss');

angular.module('blog')
  .controller('ArticleFormController', ['Articles', '$scope', '$state', function (Articles, $scope, $state) {
    const defaultArticle = {
      title: '',
      image: '',
      body: '',
    };

    this.inEditMode = !!$scope.article;

    this.article = $scope.article && JSON.parse($scope.article) || defaultArticle;

    this.create = (title, image, body) => {
      Articles.create({ title, image, body, }).$promise
        .then(() => $state.go('articles'));
    };

    this.update = (id, title, image, body) => {
      Articles.update({ id }, { title, image, body, }).$promise
        .then(() => $state.go('articles'));
    };

    this.submit = () => {
      if (!$scope.newForm.$valid) {
        this.titleInvalid = !$scope.newForm.title.$valid;
        this.bodyInvalid = !$scope.newForm.body.$valid;

        return;
      }

      const {_id: id, title, image, body} = this.article;

      if (this.inEditMode) {
        this.update(id, title, image, body);
      } else {
        this.create(title, image, body);
      }
    };
  }]);
