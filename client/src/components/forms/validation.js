// jscs:disable maximumLineLength
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reAlpha = /[A-z\- ]+/;
const reTel = /[0-9\+\- ]+/;

export const compEntry = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name required!';
  } else if (!reAlpha.test(values.firstName)) {
    errors.firstName = 'Names cannot contain special characters!';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Names can be a maximum of 15 characters';
  }

  if (!values.lastName) {
    errors.lastName = 'Second name required!';
  } else if (!reAlpha.test(values.lastName)) {
    errors.lastName = 'Names cannot contain special characters';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Names can be a maximum of 15 characters';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!reEmail.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.profession === 'Profession' || !values.profession) {
    errors.profession = 'Please select a profession!';
  }

  if (values.age === 'Age' || !values.age) {
    errors.age = 'Please select an age range!';
  }

  if (values.antiSpam) {
    errors.antiSpam = 'No bots';
  }

  return errors;
};

export const dealerSignup = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'You must enter a name!';
  }

  if (!values.email) {
    errors.email = 'You must enter an email address!';
  }

  if (!values.city) {
    errors.city = 'Please enter the city that your busness operates from!';
  }

  if (values.favePlatform === 'What\'s your favourite platform to sell on?' || !values.favePlatform) {
    errors.favePlatform = 'Please enter your favourite selling platform!';
  }

  if (values.reason === 'Why? change to checkboxes?' || !values.reason) {
    errors.reason = 'Why do you like that playform?';
  }

  if (values.listingValue === 'How much would you like to list?' || !values.listingValue) {
    errors.listingValue = 'Please enter roughly how much stock you\'d want to liston the website';
  }

  if (values.averagePrice === 'What\'s the average price of your items?' || !values.averagePrice) {
    errors.averagePrice = 'Please enter the approximate average price of the items you\'d like to list';
  }

  if (values.shopfront === 'Would you like a personalised shopfront?' || !values.shopfront) {
    errors.shopfront = 'Please enter if you\'d like to have a personalised boutique within the website';
  }

  return errors;
};
