import { combineReducers } from 'redux';
import { SITE_ACTIONS } from '../actions/siteActions';


// item to be approved
// payload: 
// {
//  type: 'profile' or 'site'
//  item: {the profile or site} 
// }
const approvalItem = (state = {}, action) => {
  switch (action.type) {
    case 'APPROVAL_ITEM':
      return action.payload;
  }
  return state;
}


const recentThreeSites = (state = [], action) => {
  
  switch (action.type) {
    case 'CHANGE_RECENT_THREE_SITE':
      if(state.length < 3) {
        return [action.payload, ...state];
      }
      else {
        return [action.payload, state[0], state[1]];
      }
  }
  return state;
}


export default combineReducers({
  approvalItem,
});
