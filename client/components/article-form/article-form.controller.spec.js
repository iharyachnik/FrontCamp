describe('Articles-Form controller', function () {
  beforeEach(angular.mock.module('blog'));
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  it('Should not be in edit mode', function () {
    const scope = $rootScope.$new();

    scope.article = null;

    const controller = $controller('ArticleFormController', {
      '$scope': scope,
    });

    expect(controller.inEditMode).toEqual(false);
  });

  it('Should be with filled article', function () {
    const article = `{
      "title": "title",
      "body": "body"
    }`;

    const scope = $rootScope.$new();

    scope.article = article;

    const controller = $controller('ArticleFormController', {
      '$scope': scope,
    });

    expect(controller.article).toEqual(JSON.parse(article));
  });

});