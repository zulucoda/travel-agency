/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import searchReducer, {
  searchOnChangeAction,
  onSearchAsyncAction,
  onSearchErrorAction
} from '../search.reducer';
import TravelDealsService from '../../../service/travel-deals-service';
import {
  cacheDealsAction,
  receiveDealsAction
} from '../../travel-deals/travel-deals.reducer';
import { onLoadingAction } from '../../app/app.reducer';

describe('Search Reducer - Unit Test', () => {
  function stateBefore() {
    return {
      search: {
        departure: 'Choose departure',
        arrival: 'Choose arrival',
        dealType: 'Cheapest'
      }
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

  describe('onSearchError', () => {
    it('should return state with errorMessage set when onSearchError action is dispatched', () => {
      const action = onSearchErrorAction({ message: 'some error message' });

      const actual = searchReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        errorMessage: 'some error message'
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('onSearch async action', () => {
    it('should dispatch onLoadingAction, receiveDealsAction and cacheDealsAction when onSearchAsyncAction is dispatched', async () => {
      const departure = 'some departure city';
      const arrival = 'some arrival city';
      const dealType = 'Cheapest';

      const getState = jest.fn(() => ({
        appReducer: {
          travelDeals: {
            ...payload()
          }
        },
        searchReducer: {
          search: {
            departure: 'some departure city',
            arrival: 'some arrival city',
            dealType: 'Cheapest'
          }
        }
      }));

      const dispatch = jest.fn();

      TravelDealsService.getTravelDealsForCities = jest.fn(() =>
        Promise.resolve(payload())
      );

      await onSearchAsyncAction()(dispatch, getState);

      expect(TravelDealsService.getTravelDealsForCities).toBeCalledWith(
        departure,
        arrival,
        dealType,
        payload()
      );
      expect(dispatch.mock.calls[0][0]).toEqual(
        onLoadingAction({ isLoading: true })
      );
      expect(dispatch.mock.calls[1][0]).toEqual(receiveDealsAction(payload()));
      expect(dispatch.mock.calls[2][0]).toEqual(
        cacheDealsAction({ departure, arrival, dealType, data: payload() })
      );
      expect(dispatch.mock.calls[3][0]).toEqual(
        onLoadingAction({ isLoading: false })
      );
    });
  });
});
