import {
  COMP_SUCCESS,
  COMP_FAIL,
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case COMP_SUCCESS:
      return `Thanks for entering, and good luck! We'll be announcing the winner
      on Facebook, so don't forget to head over and like our page!`;
    case COMP_FAIL:
      return action.payload;
    default:
      return state;
  }
};
