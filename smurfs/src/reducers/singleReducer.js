import {
  SINGLE_SMURF,
  TOGGLE_EDIT
} from '../actions/index';

const initialState = {
  selected: {},
  viewEdit: false
}

export const singleReducer = (state = initialState, action) => {
  switch(action.type) {
    case SINGLE_SMURF:
      return {
        ...state,
        selected: action.payload,
        viewEdit: false
      }
    case TOGGLE_EDIT:
      return {
        ...state,
        viewEdit: !state.viewEdit
      }
    default:
      return state;
  }
}
