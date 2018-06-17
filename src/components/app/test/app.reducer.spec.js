/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import appReducer, {
  travelDealsReceivedAction,
  onGetTravelDealsAsyncAction
} from '../app.reducer';
import travelDealsService from '../../../service/travel-deals-service';

describe('App Reducer - Unit Test', () => {
  function stateBefore() {
    return {
      travelDeals: {}
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
          departure: 'London',
          arrival: 'Amsterdam',
          duration: { h: '07', m: '45' },
          cost: 40,
          discount: 25,
          reference: 'BLA0745'
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

  it('should return state when travelDealsReceivedAction action is dispatched', function() {
    const action = travelDealsReceivedAction(payload());

    const actual = appReducer(stateBefore(), action);

    const expected = {
      ...stateBefore(),
      travelDeals: { ...payload() }
    };

    expect(actual).toEqual(expected);
  });

  describe('onGetTravelDeals async action', () => {
    it('should dispatch travelDealsReceivedAction', async function() {
      travelDealsService.onGetTravelDeals = jest.fn(() =>
        Promise.resolve(payload())
      );

      const dispatch = jest.fn();

      await onGetTravelDealsAsyncAction()(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(
        travelDealsReceivedAction(payload())
      );
    });
  });
});
