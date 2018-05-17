// jscs:disable requireShorthandArrowFunctions

import axios from 'axios';
import {
  CLEAR_STATUS,
  COMP_SUCCESS,
  COMP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './types';

/*
*
* Form actions
* - Alter state of form to address if form has been submitted
*/

export const competitionEntry = (formData) =>
  async dispatch => {
    axios.post('/api/competition-entry', formData)
      .then(res => {
        dispatch({ type: COMP_SUCCESS, payload: res.data });
      })
      .catch(({ response }) => {
        dispatch({ type: COMP_FAIL, payload: response.data });
      });
  };

export const dealerSignup = (formData) =>
  async dispatch => {
    axios.post('/api/dealer-signup', formData)
      .then(res => {
        console.log(res);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch({ type: SIGNUP_FAIL, payload: response.data });
      });
  };

/*
  *
  * Clear errors when component unmounts
*/
export const clearStatus = () => {
  return { type: CLEAR_STATUS };
};
