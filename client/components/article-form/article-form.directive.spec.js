describe('Article-Form directive', function() {
  let element;
  let scope;

  beforeEach(angular.mock.module('blog'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<article-form></article-form>'
    );

    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('Should find form', function() {
    expect(element.find('form')[0].name).toBe('newForm');
  });
});