import { RECEIVE_THEME } from "../actions/themes_actions";
import { SET_CURRENT_SEQUENCE } from "../actions/sequence_actions";
import { merge } from 'lodash';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_THEME:
            return merge({}, state, { currentTheme: action.theme._id });
        case SET_CURRENT_SEQUENCE:
            return merge({}, state, { currentSequence: action.seqId })
        default:
            return state;
    }
}

export default sessionReducer;