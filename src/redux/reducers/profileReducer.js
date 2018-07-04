import { combineReducers } from 'redux';
import { PROFILE_ACTIONS } from '../actions/profileActions';

const allProfiles = (state = [], action) => {
    switch (action.type) {
        case PROFILE_ACTIONS.SET_PROFILES:
            return initialState
    default:
        return state;
    }
}

export default combineReducers({
    allProfiles,
});