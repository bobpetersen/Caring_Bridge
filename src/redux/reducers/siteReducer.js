import { combineReducers } from 'redux';
import { SITE_ACTIONS } from '../actions/siteActions';

const allSites = (state = [], action) => {
  switch (action.type) {
    case SITE_ACTIONS.SET_SITE:
        return state;
    default:
        return state;
    }
}

export default combineReducers({
  allSites,
});


