import fetch from 'isomorphic-unfetch'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function search(searchString) {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
    .then(resp => 
      resp.json()
    )
}

export function* updateSearchString(action) {
  yield put({type: 'updateSearch', search: action.payload})
}

export function* loadShows(action) {
  const searchRes = yield call(search, action.payload)
  yield put({type: 'loadShowsToStore', search: searchRes})
}

function* mySaga() {
  yield takeEvery('updateSearchString', updateSearchString)
  yield takeLatest('loadShows', loadShows)
}

export default mySaga
