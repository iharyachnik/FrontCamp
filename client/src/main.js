import environment from './environment';
import 'whatwg-fetch';

import { HttpClient } from 'aurelia-fetch-client';
// import { Container } from 'aurelia-dependency-injection';

// access root container
// let container = Container.instance;

//Configure Bluebird Promises.
Promise.config({
  longStackTraces: environment.debug,
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  let httpClient = new HttpClient();

  httpClient.configure(config => {
    config
      .withDefaults({
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'Fetch'
        }
      });
  });

  // container.registerInstance('http', httpClient);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
