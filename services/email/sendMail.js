const sendgrid = require('@sendgrid/mail');
const keys = require('../../config/keys');
const _ = require('lodash');

sendgrid.setApiKey(keys.sendGridKey);

const composeHTML = (data) => {
  let html = '';
  _.map(data, (value, key) => {
    html += `<strong>${key}: </strong><span>${value}</span><br>`;
  });
  return html;
};

module.exports = (req, res, next) => {
  const msg = {
    to: 'haydnjmorris@googlemail.com',
    from: 'web@intique.net',
    replyTo: 'replyToMe@gmail.com',
    subject: 'Dealer application',
    html: composeHTML(req.body),
  };

  sendgrid
    .send(msg)
    .then(() => next())
    .catch(error => res.send(error));

};
