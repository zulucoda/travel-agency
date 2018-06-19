/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { combineReducers } from 'redux';
import appReducer from '../components/app/app.reducer';
import searchReducer from '../components/search/search.reducer';

export default combineReducers({
  appReducer,
  searchReducer
});
