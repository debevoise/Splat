import { RECEIVE_SAMPLES, RECEIVE_SAMPLE } from '../actions/sample_actions';
import { RECEIVE_THEME } from '../actions/themes_actions';

const samplesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  
  let newState = {};
  switch (action.type) {
    case RECEIVE_SAMPLES:
      action.samples.forEach(sample => {
        newState[sample._id] = sample;
      });
      return Object.assign({}, state, newState);
    case RECEIVE_SAMPLE:
      return Object.assign({}, state, {
        [action.sample._id]: action.sample
      });
    case RECEIVE_THEME:
      action.theme.samples.forEach( sample => {
        newState[sample._id] = sample
      });
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default samplesReducer;