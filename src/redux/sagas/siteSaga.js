import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getSites() {

}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus() {

}

function* scanSaga() {
  yield takeEvery('FETCH_SITES', getSites);
  yield takeEvery('SET_SITE_STATUS', setSiteStatus);
}

export default scanSaga;