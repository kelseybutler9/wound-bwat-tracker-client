import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {appReducer} from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    app: appReducer
  }),
  applyMiddleware(thunk)
);
