const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' //Referencia para qual model é essa informação
  }
})

module.exports = mongoose.model('Spot', SpotSchema)