import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

function* getProfiles() {
  try {
    let profiles = yield call(axios.get, '/api/profile/', config);
    yield put({type: 'SET_PROFILES', payload: profiles.data});
  } catch (error) {

  }
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