import express from 'express';

import config from './config';
import configRoutes from './routes';
import configDB from './database';

import mongoose from 'mongoose';

const app = express();

const listen = () => {
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
  })
};

configRoutes(app);
configDB()
  .on('error', console.log)
  .on('disconnected', configDB)
  .once('open', listen);
