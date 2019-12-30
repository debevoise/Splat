import { RECEIVE_THEMES, RECEIVE_THEME } from '../actions/themes_actions';
import { RECEIVE_SEQUENCE } from '../actions/sequence_actions';

const themesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = {};
  switch(action.type) {
    case RECEIVE_SEQUENCE:
      newState[action.theme._id] = action.sequence.theme
      return Object.assign({}, state, newState);
    case RECEIVE_THEMES:
      action.themes.forEach( theme => {
        newState[theme._id] = theme
      });
      return Object.assign({}, state, newState);
    case RECEIVE_THEME:
      return Object.assign({
        [action.theme._id]: action.theme
      });
    default:
      return state;
  }
}

export default themesReducer;