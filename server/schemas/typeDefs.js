const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    title: String
    category: String
    price: Float
    img: String
    desc: String
  }
  
  type Reservation{
    _id: ID
    cSustomerName: String
    guestAmount: Int
    timeStart: String
    timeEnd: String
    comments: String
  }


  type Query {
    product(_id: ID!): Product
    products: [Product]
  }

`;

module.exports = typeDefs;
