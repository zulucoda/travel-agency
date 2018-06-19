/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
