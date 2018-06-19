/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import travelDealsReducer, {
  exampleAction,
  exampleAsyncAction
} from '../travel-deals.reducer';

describe('travelDealsReducer - Unit Test', () => {
  function stateBefore() {
    return {
      exampleVariable: false
    };
  }

  it('should return initial state when action is undefined', () => {
    const action = {};

    const actual = travelDealsReducer(undefined, action);

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

    const actual = travelDealsReducer(currentState, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  describe('exampleAction', () => {
    it('should send humans to Mars to recolonise', () => {
      const action = exampleAction(false);

      const actual = travelDealsReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        exampleVariable: false
      };

      expect(actual).toEqual(expected);
    });
  });
});
