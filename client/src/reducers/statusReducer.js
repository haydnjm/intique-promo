import {
  CREATE_STATUS,
  CLEAR_STATUS,
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case CREATE_STATUS:
      return action.payload;
    case CLEAR_STATUS:
      return '';
    default:
      return state;
  }
};
