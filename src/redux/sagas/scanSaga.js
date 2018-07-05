import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { SCAN_ACTIONS } from '../actions/scanActions';
import { callScan } from '../requests/scanRequests';

function* getScanInfo() {
  try {
    const scanInfo = yield callScan();
    console.log(scanInfo);
    yield put({
      type: SCAN_ACTIONS.SET_SCAN,
      payload: scanInfo[0],
    });
  }
  catch (error) {
    console.log(`Error on getScanInfo: ${error}`);
  }
}

function* scanSaga() {
  yield takeEvery('FETCH_SCAN', getScanInfo);
}

export default scanSaga;