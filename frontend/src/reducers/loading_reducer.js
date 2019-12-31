import { SET_LOADING } from '../actions/ui_actions';

const _default_state = false;

export default (state = _default_state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.value;
    default:
      return state;
  }
};