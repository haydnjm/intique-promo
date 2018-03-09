if (process.env.NODE_ENV === 'production') {
  console.log('poduction keys loaded');
  module.exports = require('./stage');
} else {
  console.log('dev keys loaded');
  module.exports = require('./dev');
};
