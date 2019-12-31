import { RECEIVE_THEME } from "../actions/themes_actions";


const sessionReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_THEME:
            return {currentTheme: action.theme._id}    
        default:
            return state;
    }
}

export default sessionReducer;