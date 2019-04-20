import {
  ERROR,
  ADDING,
  FETCHING,
  ADD_SMURF,
  FETCH_SMURFS,
  EDIT_SMURF,
  EDITING,
  DELETING,
  DELETE_SMURF
} from '../actions/index'

const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  editing: false,
  deleting: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR:
      return {
        ...state,
        fetching: false,
        adding: false,
        deleting: false,
        updating: false,
        error: action.payload
      }
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      }
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        adding: false
      }
    case ADDING:
      return {
        ...state,
        adding: true
      }
    case EDIT_SMURF:
      return {
        ...state,
        editing: true
      }
    case DELETING:
      return {
        ...state,
        deleting: true
      }
    case EDIT_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        editing: false
      }
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        deleting: false
      }
    default:
      return state
  }
}
