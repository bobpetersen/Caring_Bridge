import { combineReducers } from 'redux';
import { SITE_ACTIONS } from '../actions/siteActions';


// list of sites for in the table
const allSites = (state = [], action) => {
  switch (action.type) {
    case SITE_ACTIONS.SET_SITE:
      return action.payload;
  }
  return state;
}

export default combineReducers({
  allSites,
});