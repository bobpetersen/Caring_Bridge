import { combineReducers } from 'redux';
import { PROFILE_ACTIONS } from '../actions/profileActions';

const allProfiles = (state = [], action) => {
    //more code goes here
    switch (action.type) {
        case 'SET_PROFILES':
            return action.payload;
    }
    return state;
}

const recentThreeProfiles = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_RECENT_THREE':
            if (state.length < 3) {
                return [action.payload, ...state];
            }
            else {
                return [action.payload, state[0], state[1]];
            }
    }
    return state;
}

export default combineReducers({
    allProfiles,
    recentThreeProfiles,
});