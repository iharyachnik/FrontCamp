import mongoose from 'mongoose';

class BaseService {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    return this.model.create(obj);
  }

  getOne(options) {
    return this.model.findOne(options);
  }

  getById(id) {
    return this.model.findById(convertId(id));
  }

  getAll(options) {
    return this.model.find(options);
  }

  updateOne(options, newItem) {
    const params = {
      new: true,
    };

    return this.model.findOneAndUpdate(options, newItem, params);
  }

  updateById(id, newItem) {
    return this.updateOne({ _id: convertId(id) }, newItem);
  }

  deleteOne(options) {
    return this.getOne(options).remove();
  }

  deleteById(id) {
    return this.getById(id).remove();
  }

  count(options) {
    return this.model.count(options);
  }
}

const convertId = (id) => new mongoose.mongo.ObjectId(id);

export default BaseService;