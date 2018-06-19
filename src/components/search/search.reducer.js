import CreateAction from '../../redux/action-creator/create-action';

const reducerName = 'search';

const searchOnChange = new CreateAction(reducerName, 'SEARCH_ON_CHANGE_ACTION');
export const searchOnChangeAction = searchOnChange.action;

const initialSate = {
  search: {
    departure: 'Choose departure',
    arrival: 'Choose arrival'
  }
};

export default function searchReducer(state = initialSate, action) {
  switch (action.type) {
    case searchOnChange.actionType:
      state.search[action.payload.name] = action.payload.value;
      return { ...state };
    default:
      return state;
  }
}
