/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import searchReducer, { searchOnChangeAction } from '../search.reducer';

describe('Search Reducer - Unit Test', () => {
  function stateBefore() {
    return {
      search: {
        departure: 'Choose departure',
        arrival: 'Choose arrival'
      }
    };
  }

  it('should return initial state', () => {
    const action = {};

    const actual = searchReducer(undefined, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  it('should return current state when unknown action is dispatched', () => {
    const action = { type: 'SOME_UNKNOWN_ACTION' };

    const currentState = {
      ...stateBefore()
    };

    const actual = searchReducer(currentState, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  describe('searchOnChangeAction', () => {
    it('should return state and search is set when searchOnChangeAction is dispatched', () => {
      const action = searchOnChangeAction({
        value: 'some value',
        name: 'departure'
      });

      const actual = searchReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        search: {
          ...stateBefore().search,
          departure: 'some value'
        }
      };

      expect(actual).toEqual(expected);
    });
  });

  // describe('onSearchAction')
});
