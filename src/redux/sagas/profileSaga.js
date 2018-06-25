import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getProfiles() {
    
}

function* setProfileStatus() {
    
}

function* profileSaga() {
  yield takeEvery('FETCH_PROFILES', getProfiles);
  yield takeEvery('SET_PROFILE_STATUS', setProfileStatus);
}

export default profileSaga;