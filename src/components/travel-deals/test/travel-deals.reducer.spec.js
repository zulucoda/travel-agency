/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import travelDealsReducer, {
  receiveDealsAction,
  cacheDealsAction
} from '../travel-deals.reducer';

describe('Travel Deals Reducer - Unit Test', () => {
  function stateBefore() {
    return {
      currentDeals: [],
      cacheDeals: []
    };
  }

  function payload() {
    return {
      deals: [
        {
          transport: 'bus',
          departure: 'London',
          arrival: 'Amsterdam',
          duration: { h: '07', m: '45' },
          cost: 40,
          discount: 25,
          reference: 'BLA0745'
        },
        {
          transport: 'bus',
          departure: 'Amsterdam',
          arrival: 'Warsaw',
          duration: { h: '05', m: '15' },
          cost: 40,
          discount: 25,
          reference: 'BAW0515'
        },
        {
          transport: 'bus',
          departure: 'Warsaw',
          arrival: 'Stockholm',
          duration: { h: '05', m: '15' },
          cost: 40,
          discount: 50,
          reference: 'BWS0515'
        },
        {
          transport: 'bus',
          departure: 'Stockholm',
          arrival: 'Moscow',
          duration: { h: '05', m: '30' },
          cost: 40,
          discount: 25,
          reference: 'BSM0530'
        }
      ]
    };
  }

  it('should return initial state', () => {
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

  describe('receiveDealsAction', () => {
    it('should return state with current deals set when receiveDealsAction is dispatched', () => {
      const action = receiveDealsAction(payload());

      const actual = travelDealsReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        currentDeals: [...payload().deals]
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('cacheDealsAction', () => {
    it('should return state with cache deals set when cacheDealsAction is dispatched', () => {
      const departure = 'some departure city 1';
      const arrival = 'some arrival city 1';

      const action = cacheDealsAction({
        departure,
        arrival,
        deals: [...payload().deals]
      });

      const actual = travelDealsReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        cacheDeals: [
          ...stateBefore().cacheDeals,
          {
            departure,
            arrival,
            deals: [...payload().deals]
          }
        ]
      };

      expect(actual).toEqual(expected);
    });
  });
});
