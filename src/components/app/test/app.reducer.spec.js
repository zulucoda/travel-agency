/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import appReducer, {
  travelDealsReceivedAction,
  onGetTravelDealsAsyncAction,
  getCitiesAction
} from '../app.reducer';
import TravelDealsService from '../../../service/travel-deals-service';

describe('App Reducer - Unit Test', () => {
  function stateBefore() {
    return {
      travelDeals: {},
      cities: []
    };
  }

  function payload() {
    return {
      currency: 'EUR',
      deals: [
        {
          transport: 'train',
          departure: 'London',
          arrival: 'Amsterdam',
          duration: { h: '05', m: '00' },
          cost: 160,
          discount: 0,
          reference: 'TLA0500'
        },
        {
          transport: 'bus',
          departure: 'Amsterdam',
          arrival: 'London',
          duration: { h: '07', m: '45' },
          cost: 40,
          discount: 25,
          reference: 'BAL0745'
        }
      ]
    };
  }

  it('should initialise with initial state', () => {
    const action = {};

    const actual = appReducer(undefined, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  describe('travelDealsReceivedAction action', () => {
    it('should return state when travelDealsReceivedAction action is dispatched', () => {
      const action = travelDealsReceivedAction(payload());

      const actual = appReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        travelDeals: { ...payload() }
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('get cities action', () => {
    it('should return state with cities set when getCitiesAction is dispatched', () => {
      const action = getCitiesAction(payload());

      const actual = appReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        cities: ['London', 'Amsterdam']
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('onGetTravelDeals async action', () => {
    it('should dispatch travelDealsReceivedAction and getCitiesAction when onGetTravelDealsAsyncAction is dispatched', async () => {
      TravelDealsService.onGetTravelDeals = jest.fn(() =>
        Promise.resolve(payload())
      );

      const dispatch = jest.fn();

      await onGetTravelDealsAsyncAction()(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(
        travelDealsReceivedAction(payload())
      );
      expect(dispatch.mock.calls[1][0]).toEqual(getCitiesAction(payload()));
    });
  });
});
