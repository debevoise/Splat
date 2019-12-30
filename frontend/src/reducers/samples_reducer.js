import { RECEIVE_SAMPLES, RECEIVE_SAMPLE } from '../actions/sample_actions';

const samplesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SAMPLES:
      return Object.assign({}, state, action.samples);
    case RECEIVE_SAMPLE:
      let newSamples = Object.assign({}, state.samples, {
        [action.sample.id]: action.sample
      });
      return Object.assign({}, state, newSamples);
    default:
      return state;
  }
}

export default samplesReducer;