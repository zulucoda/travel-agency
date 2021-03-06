/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../app.container';
import { onGetTravelDealsAsyncAction } from '../app.reducer';

describe('App Container - Unit test', () => {
  function stateBefore() {
    return {
      appReducer: {
        travelDeals: {},
        isLoading: false
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      travelDeals: {},
      isLoading: false
    };

    expect(actual).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch);

    expect(bindActionCreators).toHaveBeenCalledWith(
      {
        onGetTravelDealsAsyncAction
      },
      dispatch
    );
  });
});
