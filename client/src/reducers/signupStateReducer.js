import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return `Thank you for signing up to become a dealer!`;
    case SIGNUP_FAIL:
      return action.payload;
    default:
      return state;
  }
};
