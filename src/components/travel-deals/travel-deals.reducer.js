/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import CreateAction from '../../redux/action-creator/create-action';

const reducerName = 'travel-deals';

const receiveDeals = new CreateAction(reducerName, 'RECEIVE_DEALS_ACTION');
export const receiveDealsAction = receiveDeals.action;

export function exampleAsyncAction() {
  return (dispatch, getState) => {
    const { travelDealsReducer } = getState();
    dispatch(exampleAction(!travelDealsReducer.exampleVariable));
  };
}

const initialSate = {
  currentDeals: [],
  cacheDeals: {
    departure: '',
    arrival: '',
    deals: []
  }
};

export default function travelDealsReducer(state = initialSate, action) {
  switch (action.type) {
    case receiveDeals.actionType:
      return { ...state, currentDeals: [...action.payload.deals] };
    default:
      return state;
  }
}
