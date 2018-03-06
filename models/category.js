const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parentCategory: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: false
  },
  dateAdded: {
    type: Date,
    required: true
  },
  dateUpdated: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model('Category', schema);