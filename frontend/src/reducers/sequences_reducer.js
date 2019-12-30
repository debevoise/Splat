import { RECEIVE_SEQUENCE, RECEIVE_SEQUENCES } from '../actions/sequence_actions';

const sequencesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEQUENCE:
      const { sequence } = action;
      sequence.theme = sequence.theme._id;
      return Object.assign({}, state, {
        [sequence._id]: sequence
      })

    case RECEIVE_SEQUENCES:
      const newState = {};
      action.sequences.forEach(seq => {
        newState[seq._id] = seq;
      })
      return Object.assign({}, state, newState);

    default:
      return state;
  }
}

export default sequencesReducer;