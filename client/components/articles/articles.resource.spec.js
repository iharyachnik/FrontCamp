describe('Articles resource', function () {
  let mockResource;
  let $httpBackend;

  beforeEach(angular.mock.module('blog'));

  beforeEach(angular.mock.inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('Articles');
  }));

  it('should get articles count', (function () {
    $httpBackend.expectGET('/api/articles/count')
      .respond({
        count: 5,
      });

    const result = mockResource.count();

    $httpBackend.flush();

    expect(result.count).toEqual(5);
  }));

});