import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { SITE_ACTIONS } from '../actions/siteActions';
import { callSite, callSetSite } from '../requests/siteRequests';

function* getSites() {
  try {
    const sites = yield callSite();
      yield put({
        type: SITE_ACTIONS.SET_SITES,
        payload: sites,
      });
      yield put({
        type: SITE_ACTIONS.FETCH_SITES,
      });
  } catch (error) {
  console.log(`Error on getSites: ${error}`);
  };
}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus(payload) {
  const { id } = payload;
  try {
    const setSite = yield callSetSite(id);
    yield put({
      type: SITE_ACTIONS.SET_SITE_STATUS,
      payload: setSite,
    });
    yield put({
      type: SITE_ACTIONS.FETCH_SITES,
    });
  } catch (error) {
    console.log( `Error on setSiteStatus: ${error}`);
  };
}

function* scanSaga() {
  yield takeEvery(SITE_ACTIONS.FETCH_SITES, getSites);
  yield takeEvery(SITE_ACTIONS.SET_SITE_STATUS, setSiteStatus);
}

export default scanSaga;