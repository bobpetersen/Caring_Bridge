import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getScanInfo() {

}

function* scanSaga() {
  yield takeEvery('SCAN_INFO', getScanInfo);
}

export default scanSaga;