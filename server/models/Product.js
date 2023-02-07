const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  img: {
    type: String
  },
  desc: {
    type: String
  } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
