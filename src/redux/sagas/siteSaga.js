import { takeLatest, put as dispatch } from 'redux-saga/effects';
import { SITE_ACTIONS } from '../actions/siteActions';
import { callSite } from '../requests/siteRequest';

const host = "http://localhost:5000/";

function* getSites() {
  try {
    const sites = yield callSite();
      yield put({
        type: SITE_ACTIONS.SET_SITES,
        payload: sites,
      });
      yield put({
        type: SITE_ACTIONS.FETCH_SITES,
        sites,
      });
  } catch (error) {
  console.log(`error on siteSaga: ${error}`);
  };
}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus(action) {
  try {
    const setSite = yield call(axios.put, `${host}/status${action.payload.site.id}`,
    action.payload.site, config)
    
    yield put({
      type: SITE_ACTIONS.SET_SITE_STATUS,
      payload: setSite,

    })
  }



yield call(axios.put, '/:status', {
  reset: action.payload,
  spam: action.payload,
  notSpam: action.payload,
})
yield put({ 
  type: 'FETCH_SITES' 
});
}

function* scanSaga() {
  yield takeEvery(SITE_ACTIONS.FETCH_SITES, getSites);
  yield takeEvery(SITE_ACTIONS.SET_SITE_STATUS, setSiteStatus);
}

export default scanSaga;