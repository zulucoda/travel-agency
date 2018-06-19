/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import CreateAction from '../../redux/action-creator/create-action';
import TravelDealsService from '../../service/travel-deals-service';

const reducerName = 'app';

const travelDealReceived = new CreateAction(reducerName, 'TRAVEL_DEALS_ACTION');
export const travelDealsReceivedAction = travelDealReceived.action;

const getCities = new CreateAction(reducerName, 'GET_CITIES_ACTION');
export const getCitiesAction = getCities.action;

const onLoading = new CreateAction(reducerName, 'IS_LOADING_ACTION');
export const onLoadingAction = onLoading.action;

export function onGetTravelDealsAsyncAction() {
  return function(dispatch) {
    dispatch(onLoadingAction({ isLoading: true }));
    return TravelDealsService.onGetTravelDeals().then(results => {
      dispatch(travelDealsReceivedAction(results));
      dispatch(getCitiesAction(results));
      dispatch(onLoadingAction({ isLoading: false }));
    });
  };
}

const initialSate = {
  travelDeals: {},
  cities: [],
  isLoading: false
};

export default function appReducer(state = initialSate, action) {
  switch (action.type) {
    case travelDealReceived.actionType:
      return { ...state, travelDeals: action.payload };
    case getCities.actionType:
      const cities = action.payload.deals.map(deal => deal.departure);
      return {
        ...state,
        cities: [...new Set(cities)]
      };
    case onLoading.actionType:
      return {
        ...state,
        isLoading: action.payload.isLoading
      };
    default:
      return state;
  }
}
