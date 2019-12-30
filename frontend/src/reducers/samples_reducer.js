import { RECEIVE_SAMPLES, RECEIVE_SAMPLE } from '../actions/sample_actions';

const samplesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SAMPLES:
      let newState = {};
      action.samples.forEach( sample => {
        newState[sample.id] = sample
      });
      return Object.assign({}, state, newState);
    case RECEIVE_SAMPLE:
      return Object.assign({}, state, {
        [action.sample.id]: action.sample
      });
    default:
      return state;
  }
}

export default samplesReducer;