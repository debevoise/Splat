import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ui_actions';

export default (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};