angular.module('blog')
  .directive('minLength', function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attr, ctrl) {
        const min = attr.minLength && parseInt(attr.minLength) || 5;

        const minLengthValidator = (modelValue) => {
          if (modelValue.length < min) {
            angular.element(elem).addClass('new-article-form-row__content-input_invalid');
          } else {
            angular.element(elem).removeClass('new-article-form-row__content-input_invalid')
          }

          return modelValue.length < min;
        };

        ctrl.$parsers.push(minLengthValidator);
      }
    };
  });