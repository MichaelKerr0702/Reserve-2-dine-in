const { AuthenticationError } = require('apollo-server-express');
const {Product, Reservation} = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    products: async (parent, { _id }) => {
      return await Product.find(_id);
    },
  },
  Mutation: {
    addResorvation: async (parent, args) => {
      const reserved = await Reservation.create(args);

      return { reserved };
    },
    deleteResorvation: async (parent, {_id}) => {
      return await Reservation.findByIdAndDelete(_id)
    }
  }
};

module.exports = resolvers;
