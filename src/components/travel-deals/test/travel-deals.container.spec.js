jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../travel-deals.container';
import { exampleAction, exampleAsyncAction } from '../travel-deals.reducer';

describe('travelDealsContainer - Unit test', () => {
  function stateBefore() {
    return {
      travelDealsReducer: {
        exampleVariable: true
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      exampleVariable: true
    };

    expect(actual).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch);

    expect(bindActionCreators).toHaveBeenCalledWith(
      {
        exampleAction,
        exampleAsyncAction
      },
      dispatch
    );
  });
});
