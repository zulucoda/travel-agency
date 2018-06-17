/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onGetTravelDealsAsyncAction } from './app.reducer';
import AppView from './app.view';

export function mapStateToProps({ appReducer }) {
  return {
    travelDeals: appReducer.travelDeals
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onGetTravelDealsAsyncAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);
