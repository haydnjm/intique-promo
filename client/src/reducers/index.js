import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import statusReducer from './statusReducer';

export default combineReducers({
  form: formReducer,
  status: statusReducer,
});
