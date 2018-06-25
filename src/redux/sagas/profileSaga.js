import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getProfiles() {
    
}

// set status of profile
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setProfileStatus() {

}

function* profileSaga() {
  yield takeEvery('FETCH_PROFILES', getProfiles);
  yield takeEvery('SET_PROFILE_STATUS', setProfileStatus);
}

export default profileSaga;