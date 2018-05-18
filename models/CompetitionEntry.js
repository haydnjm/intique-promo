const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  profession: String,
  gender: String,
  previous: String,
  age: String,
  prize: String,
});

module.exports = mongoose.model('comp_entries', entrySchema);
