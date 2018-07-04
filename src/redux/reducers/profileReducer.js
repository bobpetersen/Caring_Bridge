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

export default combineReducers({
    allProfiles,
});