/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ERROR,
  ADDING,
  FETCHING,
  ADD_SMURF,
  FETCH_SMURFS
} from '../actions/index'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR:
      return {
        ...state,
        fetching: false,
        adding: false,
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
    default:
      return state
  }
}

export default rootReducer
