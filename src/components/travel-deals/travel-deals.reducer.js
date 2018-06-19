import CreateAction from '../../redux/action-creator/create-action';

const reducerName = 'travel-deals';

const example = new CreateAction(reducerName, 'EXAMPLE_ACTION');
export const exampleAction = example.action;

export function exampleAsyncAction() {
  return (dispatch, getState) => {
    const { travelDealsReducer } = getState();
    dispatch(exampleAction(!travelDealsReducer.exampleVariable));
  };
}

const initialSate = {
  exampleVariable: false
};

export default function travelDealsReducer(state = initialSate, action) {
  switch (action.type) {
    case example.actionType:
      return { ...state, exampleVariable: action.payload };
    default:
      return state;
  }
}
