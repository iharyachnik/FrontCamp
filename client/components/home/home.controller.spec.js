describe('Home component', function () {
  beforeEach(angular.mock.module('blog'));
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('Should initialize variables with default values', function () {
    const params = {};

    const controller = $controller('HomeController', {
      'articleTitles': params,
    });

    expect(controller.amount).toEqual(0);
  });

  it('Should initialize variables with input values', function () {
    const params = [
      {
        title: 'article',
      }
    ];

    const controller = $controller('HomeController', {
      'articleTitles': params,
    });

    expect(controller.amount).toEqual(params.length);
    expect(controller.titles).toEqual(params);
  });

});