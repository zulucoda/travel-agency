/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchView from './search.view';
import {
  searchOnChangeAction,
  onSearchAsyncAction,
  onSearchErrorAction
} from './search.reducer';
import { resetToInitStateAction } from '../../redux/common-action/common.action';
import { CHOOSE_CITY } from '../../constants/constants';

export function mapStateToProps({ appReducer, searchReducer }) {
  return {
    cities: [CHOOSE_CITY.chooseCity, ...appReducer.cities],
    searchReducer
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchOnChangeAction,
      onSearchAsyncAction,
      onSearchErrorAction,
      resetToInitStateAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);
