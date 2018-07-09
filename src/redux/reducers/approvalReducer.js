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


export default combineReducers({
  approvalItem,
});
