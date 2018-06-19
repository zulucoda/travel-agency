jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../search.container';
import { searchOnChangeAction } from '../search.reducer';

describe('Search Container - Unit test', () => {
  function stateBefore() {
    return {
      searchReducer: {
        search: {
          departure: 'Choose departure',
          arrival: 'Choose arrival'
        }
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
      cities: [...stateBefore().appReducer.cities],
      searchReducer: { ...stateBefore().searchReducer }
    };

    expect(actual).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch);

    expect(bindActionCreators).toHaveBeenCalledWith(
      {
        searchOnChangeAction
      },
      dispatch
    );
  });
});
