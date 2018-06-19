/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import CreateAction from '../../redux/action-creator/create-action';
import { resetToInitState } from '../../redux/common-action/common.action';

const reducerName = 'travel-deals';

const receiveDeals = new CreateAction(reducerName, 'RECEIVE_DEALS_ACTION');
export const receiveDealsAction = receiveDeals.action;

const cacheDeals = new CreateAction(reducerName, 'CACHE_DEALS_ACTION');
export const cacheDealsAction = cacheDeals.action;

const initialSate = {
  currentDeals: [],
  cacheDeals: []
};

export default function travelDealsReducer(state = initialSate, action) {
  switch (action.type) {
    case receiveDeals.actionType:
      return { ...state, currentDeals: [...action.payload.deals] };
    case cacheDeals.actionType:
      return { ...state, cacheDeals: [...state.cacheDeals, action.payload] };
    case resetToInitState.actionType:
      return {
        ...initialSate
      };
    default:
      return state;
  }
}
