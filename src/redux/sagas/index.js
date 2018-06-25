import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import profileSaga from './profileSaga';
import scanSaga from './scanSaga';
import siteSaga from './siteSaga';
import userSaga from './userSaga';


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
