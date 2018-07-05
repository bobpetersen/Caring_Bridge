import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { SCAN_ACTIONS } from '../actions/scanActions';
import { callScan } from '../requests/scanRequests';

function* getScanInfo() {
  try {
    const scanInfo = yield callScan();
    yield put({
      type: SCAN_ACTIONS.SET_SCAN,
      payload: scanInfo,
    });
  }
  catch (error) {
    console.log(`Error on getScanInfo: ${error}`);
  }
}

function* scanSaga() {
  yield takeEvery('SCAN_INFO', getScanInfo);
}

export default scanSaga;