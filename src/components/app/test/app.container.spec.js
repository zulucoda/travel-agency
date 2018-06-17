jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../app.container';
import { onGetTravelDealsAsyncAction } from '../app.reducer';

describe('App Container - Unit test', () => {
  function stateBefore() {
    return {
      appReducer: {
        travelDeals: {}
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      travelDeals: {}
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
