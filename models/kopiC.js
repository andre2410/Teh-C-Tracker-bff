const mongoose = require('mongoose');

const kopiSchema = new mongoose.Schema({
  cost: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  rating: { type: String, required: true },
  type: { type: String, required: true },
  address: { type: String, required: true }
});

const KopiModel = mongoose.model('KopiC', kopiSchema);

module.exports = KopiModel;
