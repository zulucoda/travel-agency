/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../travel-deals.container';
import { cacheDealsAction, receiveDealsAction } from '../travel-deals.reducer';

describe('Travel Deals Container - Unit test', () => {
  function stateBefore() {
    return {
      travelDealsReducer: {
        currentDeals: [],
        cacheDeals: []
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch);

    expect(bindActionCreators).toHaveBeenCalledWith(
      {
        cacheDealsAction,
        receiveDealsAction
      },
      dispatch
    );
  });
});
