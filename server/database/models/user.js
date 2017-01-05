import mongoose from 'mongoose';

const {Schema} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: ''
  },
  salt: {
    type: String,
    default: ''
  }
});

mongoose.model('User', UserSchema, 'users');