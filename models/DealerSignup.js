const mongoose = require('mongoose');
const { Schema } = mongoose;

const dealerSignupSchema = new Schema({
  name: String,
  businessName: String,
  website: String,
  email: String,
  city: String,
  favePlatform: String,
  reason: String,
  listingValue: String,
  averagePrice: String,
  shopfront: String,
  fees: String,
});

module.exports = mongoose.model('dealer_signups', dealerSignupSchema);
