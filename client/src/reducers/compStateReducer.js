import {
  COMP_SUCCESS,
  COMP_FAIL,
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case COMP_SUCCESS:
      return `Thanks for entering! We'll be in touch to announce the winner, good luck!`;
    case COMP_FAIL:
      return action.payload;
    default:
      return state;
  }
};
