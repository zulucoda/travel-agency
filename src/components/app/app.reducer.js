/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import CreateAction from '../../redux/action-creator/create-action';
import travelDealsService from '../../service/travel-deals-service';

const reducerName = 'app';

const travelDealReceived = new CreateAction(reducerName, 'TRAVEL_DEALS_ACTION');
export const travelDealsReceivedAction = travelDealReceived.action;

export function onGetTravelDealsAsyncAction() {
  return function(dispatch) {
    return travelDealsService.onGetTravelDeals().then(results => {
      dispatch(travelDealsReceivedAction(results));
    });
  };
}

const initialSate = {
  travelDeals: {}
};

export default function appReducer(state = initialSate, action) {
  switch (action.type) {
    case travelDealReceived.actionType:
      return { ...state, travelDeals: action.payload };
    default:
      return state;
  }
}
