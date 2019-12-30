import { RECEIVE_SEQUENCE, RECEIVE_SEQUENCES } from '../actions/sequence_actions';

const sequencesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEQUENCE:
      let { sequence } = action;
      return Object.assign({}, state, {
        [sequence.id]: sequence
      })

    case RECEIVE_SEQUENCES:
      return action.sequences;

    default:
      return state;
  }
}

export default sequencesReducer;