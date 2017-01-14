import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';

import articleRoutes from './api/article';

const router = (app) => {
  app.use(bodyParser.json())

  app.use('/api/articles', articleRoutes);

  app.use(express.static(path.resolve(config.clientPath)));

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${config.clientPath}/index.html`));
    });
};

export default router;