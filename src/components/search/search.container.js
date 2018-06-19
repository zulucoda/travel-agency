import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchView from './search.view';
import { searchOnChangeAction } from './search.reducer';

export function mapStateToProps({ appReducer, searchReducer }) {
  return {
    cities: appReducer.cities,
    searchReducer
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchOnChangeAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);
