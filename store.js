import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-unfetch'

const exampleInitialState = {
  searchString: '',
  shows: []
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case 'updateSearchString':
      return Object.assign({}, state, { searchString: action.payload })
    case 'loadShows':
      return Object.assign({}, {...state}, { shows: action.payload })
    default: return state
  }
}


// ACTIONS
export function updateSearchString(payload) {
  return {type: 'updateSearchString', payload: payload}
}

function loadShows(data) {
  return {
    type: 'loadShows',
    payload: data
  }
}

export function search(searchString) {
  return function (dispatch) {
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
      .then(resp => 
        resp.json().then(data => dispatch(loadShows(data))
      ))
  }
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
