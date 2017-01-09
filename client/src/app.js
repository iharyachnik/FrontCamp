export class App {
  configureRouter(config, router) {

    config.title = 'Aurelia';
    config.options.pushState = true;

    config.mapUnknownRoutes(() => {
      return {
        redirect: '',
      };
    });

    config.map([
      {
        route: '',
        name: 'home',
        moduleId: 'home/home',
        title: 'Home',
        nav: true,
      },
      {
        route: 'articles',
        name: 'articles',
        moduleId: 'articles/articles',
        title: 'Articles',
        nav: true,
      },
      {
        route: 'articles/new',
        name: 'articles-new',
        moduleId: 'articles/new',
        title: 'New Article',
      },
    ]);

    this.router = router;

  }
}
