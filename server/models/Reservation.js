const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReservationSchema = new Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  guestAmount: {
    type: Number,
    min: 1,
    default: 1
  },
  timeStart: {
    type: String,
    required:true 
  },
  timeEnd: {
    type: String,
    required:true 
  },
  comments: {
    type: String
  },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
