const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  profession: String,
  age: String,
});

module.exports = mongoose.model('comp_entries', entrySchema);
