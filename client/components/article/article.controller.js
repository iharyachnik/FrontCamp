angular.module('blog')
  .controller('ArticleController', ['Articles', function (Articles) {
    this.delete = () => Articles
      .deleteOne({ id: this.item._id })
      .$promise
      .then(() => this.getAll());
  }]);
