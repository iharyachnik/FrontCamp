import config from './config';
import mongoose from 'mongoose';

import user from './models/user';
import article from './models/article';

mongoose.Promise = global.Promise

const connect = () => mongoose.connect(config.path, {}).connection;

export default connect;