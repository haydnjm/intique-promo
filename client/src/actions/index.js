// jscs:disable requireShorthandArrowFunctions

import axios from 'axios';
import {
  CREATE_STATUS,
  CLEAR_STATUS,
} from './types';

export const competitionEntry = (formData) =>
  async dispatch => {
    axios.post('/api/competition-entry', formData)
      .then(res => dispatch({ type: CREATE_STATUS, payload: res.data }))
      .catch(({ response }) => {
        console.log(response);
        dispatch({ type: CREATE_STATUS, payload: response.data });
      });
  };

export const dealerSignup = (formData) =>
  async dispatch => {
    axios.post('/api/dealer-signup', formData)
      .then(res => dispatch({ type: CREATE_STATUS, payload: res.data }))
      .catch(({ response }) =>
        dispatch({ type: CREATE_STATUS, payload: response.data }));
  };

/*
  *
  * Clear errors when component unmounts
*/
export const clearStatus = () => {
  return { type: CLEAR_STATUS };
};
