// jscs:disable maximumLineLength
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reAlpha = /[A-z\- ]+/;
const reTel = /[0-9\+\- ]+/;

export const loginValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!reEmail.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password required';
  }

  return errors;
};

export const signupValidation = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name required!';
  } else if (!reAlpha.test(values.firstName)) {
    errors.firstName = 'Names cannot contain special characters!';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Names can be a maximum of 15 characters';
  }

  if (!values.secondName) {
    errors.secondName = 'Second name required!';
  } else if (!reAlpha.test(values.secondName)) {
    errors.secondName = 'Names cannot contain special characters';
  } else if (values.secondName.length > 15) {
    errors.secondName = 'Names can be a maximum of 15 characters';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!reEmail.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match!';
  }

  return errors;
};

export const dealerValidation = (values) => {
  const errors = {};

  if (!values.business_name) {
    errors.business_name = 'Please enter your business name';
  }

  if (!values.telephone) {
    errors.telephone = 'Please enter your telephone number';
  } else if (!reTel.test(values.telephone)) {
    errors.telephone = 'This is not a valid telephone number';
  }

  return errors;

};
