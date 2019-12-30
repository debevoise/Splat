import { 
  RECEIVE_SAMPLES,
  RECEIVE_SAMPLE, 
  RECEIVE_SAMPLE_ERRORS } from '../actions/sample_actions';

const samplesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SAMPLES:
      return Object.assign({}, state, {samples: action.samples});
    case RECEIVE_SAMPLE:
      let newSamples = Object.assign({}, state.samples, action.sample);
      return Object.assign({}, state, {samples: newSamples});
    case RECEIVE_SAMPLE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default samplesReducer;