import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import statusReducer from './statusReducer';
import compStateReducer from './compStateReducer';
import signupStateReducer from './signupStateReducer';

export default combineReducers({
  form: formReducer,
  compState: compStateReducer,
  signupState: signupStateReducer,
  status: statusReducer,
});
