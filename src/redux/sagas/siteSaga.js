import { takeEvery, put } from 'redux-saga/effects';
import { SITE_ACTIONS } from '../actions/siteActions';


function* getSites() {

}

// set status of site
// include action.payload with 'reset', 'spam', or 'notSpam'
function* setSiteStatus() {

}

function* siteSaga() {
  yield takeEvery(SITE_ACTIONS.FETCH_SITES, getSites);
  yield takeEvery(SITE_ACTIONS.SET_SITE_STATUS, setSiteStatus);
}

export default siteSaga;