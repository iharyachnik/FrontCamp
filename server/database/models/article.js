import mongoose from 'mongoose';

const {Schema} = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true
  },
  body: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  image: {
    type: Buffer
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Article', ArticleSchema, 'articles');