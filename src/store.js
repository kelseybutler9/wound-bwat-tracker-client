import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'reduxForm';

import reducer from './reducer';

export default createStore(
  combineReducers({
    form: formReducer
  })
);
