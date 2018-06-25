import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import profileSaga from './profileSaga';


export default function* rootSaga() {
  yield all([
    loginSaga(),
    profileSaga(),
    scanSaga(),
    siteSaga(),
    userSaga(),
    // watchIncrementAsync()
  ]);
}
