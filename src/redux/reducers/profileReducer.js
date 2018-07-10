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
            let index = -1;
            for(let i = 0; i < state.length; i ++) {
                if(state[i]._id === action.payload._id) {
                    index = i;
                }
            }
            if(index !== -1) { // found a match
                state.splice(index, 1);
                return [action.payload, ...state];
            } else if (state.length < 3) {
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