import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const exampleInitialState = {
  searchString: '',
  shows: []
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
  case 'updateSearch':
    return Object.assign({}, state, { searchString: action.search })
  case 'loadShowsToStore':
    return Object.assign({}, {...state}, { shows: action.search })
  default: return state
  }
}


// ACTIONS

export function searchFetchSucceeded(payload) {
  return {type: 'updateSearch', payload: payload}
}

export function searchFetchFailed(msg) {
  return ''
}

export function updateSearch(payload) {
  return {type: 'updateSearch', payload: payload}
}

export const initStore = (initialState = exampleInitialState) => {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
