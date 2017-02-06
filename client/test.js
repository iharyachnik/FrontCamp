require('angular');
require('angular-mocks/angular-mocks');
require('./modules');
require('./app');
require('./components');

const testsContext = require.context('./components', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);