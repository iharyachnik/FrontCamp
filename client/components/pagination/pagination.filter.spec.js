describe('Paginator filter', () => {
  let filter;

  beforeEach(angular.mock.module('blog'));
  beforeEach(inject(function (_$filter_) {
    filter = _$filter_;
  }));

  it('Should be right list of pages', function () {
    const paginator = filter('paginator');

    expect(paginator(3, 5)).toEqual([1]);
    expect(paginator(5, 3)).toEqual([1, 2]);
  });
});