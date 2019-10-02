const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' //Referencia para qual model é essa informação
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot' //Referencia para qual model é essa informação
  }
})

module.exports = mongoose.model('Booking', BookingSchema)