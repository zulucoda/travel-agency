/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TravelDealsView from './travel-deals.view';
import { cacheDealsAction, receiveDealsAction } from './travel-deals.reducer';

export function mapStateToProps({ travelDealsReducer }) {
  return {
    travelDealsReducer
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      cacheDealsAction,
      receiveDealsAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelDealsView);
