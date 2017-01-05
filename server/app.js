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

  const User = mongoose.model('User')
  const user = new User({ name: '1111' });

  user.save()
    .then(user => console.log(user))
    .catch(err => console.log(err));

  const Article = mongoose.model('Article')
  const article = new Article({ title: '2222' });

  article.save()
    .then(a => console.log(a))
    .catch(err => console.log(err));
};

configRoutes(app);
configDB()
  .on('error', console.log)
  .on('disconnected', configDB)
  .once('open', listen);
