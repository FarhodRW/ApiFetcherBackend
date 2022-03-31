const mongoose = require('mongoose')


const apiSchema = mongoose.Schema({
  API: { type: String },
  Description: { type: String },
  Auth: { type: String },
  HTTPS: { type: Boolean },
  Cors: { type: String },
  Link: { type: String },
  Category: { type: String }
})

const Api = mongoose.model('Api', apiSchema)

module.exports = Api