/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const ERROR = 'ERROR'
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHING = 'FETCHING';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING = 'ADDING';
export const DELETING = 'DELETING';
export const DELETE_SMURF = 'DELETE_SMURFS';
export const EDIT_SMURF = 'EDIT_SMURF';
export const EDITING = 'EDITING';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const TOGGLE_EDIT = 'TOGGLE_EDIT' 

export const fetchSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING });
    smurfs
      .then(res => {
        dispatch({
          type: FETCH_SMURFS,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      })
  }
}

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({ type: ADDING });
    newSmurf
      .then(({ data }) => {
        dispatch({
          type: ADD_SMURF,
          payload: data
        })
      })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}

export const deleteSmurf = id => {
  const deleted = axios.delete('http://localhost:3333/smurfs', { data: { id }});
  return dispatch => {
    dispatch({ type: DELETING });
    deleted
      .then(({ data }) => {
        dispatch({
          type: DELETE_SMURF,
          payload: data
        })
        dispatch({
          type: SINGLE_SMURF,
          payload: {}
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      })
  }
}

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDIT
  }
}

export const editSmurf = smurf => {
  return {
    type: SINGLE_SMURF,
    payload: smurf
  }
}
