const { AuthenticationError } = require("apollo-server-express");
const { Product, Reservation } = require("../models");

const resolvers = {
  Query: {
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    products: async () => {
      return await Product.find();
    },
  },
  // Mutation: {
  // addResorvation: async (parent, args) => {
  //   const reserved = await Reservation.create(args);

  //   return { reserved };
  // },
  // deleteResorvation: async (parent, { _id }) => {
  //   return await Reservation.findByIdAndDelete(_id);
  // },
  // },
};
module.exports = resolvers;
