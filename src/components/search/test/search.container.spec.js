/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../search.container';
import {
  searchOnChangeAction,
  onSearchAsyncAction,
  onSearchErrorAction
} from '../search.reducer';
import { resetToInitStateAction } from '../../../redux/common-action/common.action';

describe('Search Container - Unit test', () => {
  function stateBefore() {
    return {
      searchReducer: {
        search: {
          departure: 'Choose departure',
          arrival: 'Choose arrival'
        },
        errorMessage: ''
      },
      appReducer: {
        travelDeals: {},
        cities: ['Some City 1', 'Some City 2']
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      cities: ['Choose city', ...stateBefore().appReducer.cities],
      searchReducer: { ...stateBefore().searchReducer }
    };

    expect(actual).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch);

    expect(bindActionCreators).toHaveBeenCalledWith(
      {
        searchOnChangeAction,
        onSearchAsyncAction,
        onSearchErrorAction,
        resetToInitStateAction
      },
      dispatch
    );
  });
});
