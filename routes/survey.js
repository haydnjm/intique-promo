const CompetitionEntry = require('../models/CompetitionEntry');
const DealerSignup = require('../models/DealerSignup');

module.exports = app => {

  app.post('/api/competition-entry', async (req, res, next) => {

    const {
      firstName,
      lastName,
      email,
      city,
      gender,
      profession,
      age,
      prize,
      previous = false,
     } = req.body;
    const existingEntry = await CompetitionEntry.findOne({ email: email });

    if (existingEntry) {
      res.status(422).send(`
        You've already entered! Make sure you've liked our Facebook page so
        that you'll know if you are our lucky winner!
      `);
    } else {
      const newEntry = new CompetitionEntry({
        firstName,
        lastName,
        email,
        city,
        profession,
        age,
        gender,
        prize,
        previous,
      }).save()
        .then(entry => {
          res.send('entry saved');
        })
        .catch(({ response }) => {
          res.status(422).send('There was a problem saving your entry');
        });
    }
  });

  app.post('/api/dealer-signup', async (req, res) => {

    const {
      name,
      businessName,
      website,
      email,
      city,
      favePlatform,
      reason,
      listingValue,
      averagePrice,
      shopfront,
      fees,
    } = req.body;

    const existingEntry = await DealerSignup.findOne({ email: email });

    if (existingEntry) {
      res.status(422).send("You've already signed up!");
    } else {
      const newEntry = new DealerSignup({
        name,
        businessName,
        website,
        email,
        city,
        favePlatform,
        reason,
        listingValue,
        averagePrice,
        shopfront,
        fees,
      }).save()
        .then(entry => {
          res.send('entry saved');
        })
        .catch(({ response }) => {
          res.status(422).send('There was a problem saving your entry');
        });
    }
  });

};
