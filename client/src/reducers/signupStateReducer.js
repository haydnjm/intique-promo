import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return `Thanks for showing your interest! We'll be in contact over the
              coming weeks to get you set up with your shiny new boutique!`;
    case SIGNUP_FAIL:
      return action.payload;
    default:
      return state;
  }
};
