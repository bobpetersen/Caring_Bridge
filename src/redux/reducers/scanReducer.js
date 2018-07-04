import { combineReducers } from 'redux';
import { SCAN_ACTIONS } from '../actions/scanActions';

const scanInfo = (state = {}, action) => {
    switch (action.type) {
      case SCAN_ACTIONS.SET_SCAN:
        return state
      default:
        return state
  };
}

export default combineReducers({
  scanInfo,
});