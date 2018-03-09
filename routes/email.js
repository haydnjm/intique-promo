const sendMail = require('../services/email/sendMail');

module.exports = app => {

  app.post('/api/signup',
    sendMail,
    (req, res) => res.send('You are signed up!')
  );

};
