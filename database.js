const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();

//Schema
const tehSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: String, required: true },
  address: { type: String, required: true }
});

const TehCModel = mongoose.model('Teh-C', tehSchema);

/**
 * DB connection function
 */
async function mongodbConnection() {
  const uri = process.env.MONGO_URI;

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    return TehCModel;

  } catch (error) {
    console.error('Failed to connect:', error);
  }
}

module.exports = { mongodbConnection };
