/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import CreateAction from '../../redux/action-creator/create-action';
import TravelDealService from '../../service/travel-deals-service';
import {
  receiveDealsAction,
  cacheDealsAction
} from '../travel-deals/travel-deals.reducer';
import { onLoadingAction } from '../app/app.reducer';

const reducerName = 'search';

const searchOnChange = new CreateAction(reducerName, 'SEARCH_ON_CHANGE_ACTION');
export const searchOnChangeAction = searchOnChange.action;

const onSearchError = new CreateAction(reducerName, 'ON_SEARCH_ERROR_ACTION');
export const onSearchErrorAction = onSearchError.action;

const initialSate = {
  search: {
    departure: 'Choose departure',
    arrival: 'Choose arrival',
    dealType: 'Cheapest'
  }
};

export function onSearchAsyncAction() {
  return function(dispatch, getState) {
    dispatch(onLoadingAction({ isLoading: true }));
    const departure = getState().searchReducer.search.departure;
    const arrival = getState().searchReducer.search.arrival;
    const dealType = getState().searchReducer.search.dealType;
    const data = getState().appReducer.travelDeals;
    return TravelDealService.getTravelDealsForCities(
      departure,
      arrival,
      dealType,
      data
    ).then(results => {
      dispatch(receiveDealsAction(results));
      dispatch(
        cacheDealsAction({ departure, arrival, dealType, data: results })
      );
      dispatch(onLoadingAction({ isLoading: false }));
    });
  };
}
export default function searchReducer(state = initialSate, action) {
  switch (action.type) {
    case searchOnChange.actionType:
      state.search[action.payload.name] = action.payload.value;
      return { ...state };
    case onSearchError.actionType:
      return {
        ...state,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
}
