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
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  image: {
    type: String,
    default: '',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Article', ArticleSchema, 'articles');