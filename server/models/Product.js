const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  image: {
    type: String
  },
  description: {
    type: String
  } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
