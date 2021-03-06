/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_SMURF':
    return {
      ...state,
      fetchingSmurfs: true
    }; 
    case 'SMURF_FETCHED': 
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }; 
    case 'ADDING_SMURF': 
    return {
      ...state,
      addingSmurf: true
    }; 
    case'SMURF_ADDED': 
    return {
      ...state,
      addingSmurf: false,
      smurfs: action.payload
    }; 
    case 'ERROR': 
    return {
      ...state,
      error: action.payload
    }; 
    default:
    return state; 
  }
}