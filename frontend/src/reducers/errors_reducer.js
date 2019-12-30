import { combineReducers } from "redux";
import { RECEIVE_SAMPLE_ERRORS, RECEIVE_SAMPLE, RECEIVE_SAMPLES } from "../actions/sample_actions";
import { RECEIVE_SEQUENCE_ERRORS, RECEIVE_SEQUENCE, RECEIVE_SEQUENCES } from "../actions/sequence_actions";

const sampleErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SAMPLE_ERRORS:
      return action.errors;
    
    case RECEIVE_SAMPLE:
    case RECEIVE_SAMPLES:
      return [];

    default:
      return state;
  }
}

const sequenceErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEQUENCE_ERRORS:
      return action.errors;
    
    case RECEIVE_SEQUENCE:
    case RECEIVE_SEQUENCES:
      return [];

    default:
      return state;
  }
}

const errorsReducer = combineReducers({
  samples: sampleErrorsReducer,
  sequences: sequenceErrorsReducer
})

export default errorsReducer;