/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TotalView from './total.view';

export function mapStateToProps({ searchReducer, travelDealsReducer }) {
  return {
    searchReducer,
    travelDealsReducer
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalView);
