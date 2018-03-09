// jscs:disable requireShorthandArrowFunctions

import axios from 'axios';
import {
  GET_USER,
  CREATE_STATUS,
  CLEAR_STATUS,
} from './types';

/*
  *
  * go to server to get user from res.user
  * dispatch action to update state with user
*/
export const getUser = () =>
  async dispatch => {
    const res = await axios.get('/api/auth/current_user');
    dispatch({ type: GET_USER, payload: res.data });
  };

/*
  *
  * params: form data from email login (email, password)
  * dispatch action to update state with user
*/
export const emailLogin = (formData, history) =>
  dispatch => {
    axios.post('/api/auth/local/login', formData)
      .then(res => {
        history.push('/dashboard');
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch(res => dispatch({
        type: CREATE_STATUS,
        payload: "We couldn't find anyone matching those credentials!",
      }));
  };

/*
  *
  * params: form data from email signup (email, password)
  * dispatch action to update state with user
*/
export const emailSignup = (formData) =>
  dispatch => {
    axios.post('/api/auth/local/signup', formData)
      .then(res => dispatch({ type: GET_USER, payload: res.data }))
      .catch(({ response }) => dispatch({ type: CREATE_STATUS, payload: response.data.error }));
  };

/*
  *
  * params: form data from application to become dealer
  * email application to applications@intique.net
*/
export const dealerApplication = (formData) =>
  dispatch => {
    axios.post('/api/dealer-application', formData)
      .then(res => dispatch({ type: CREATE_STATUS, payload: res.data }))
      .catch(({ response }) => dispatch({ type: CREATE_STATUS, payload: response.data.error }));
  };

/*
  *
  * Clear errors when component unmounts
*/
export const clearStatus = () => {
  return { type: CLEAR_STATUS };
};
