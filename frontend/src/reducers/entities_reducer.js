import { combineReducers } from 'redux';
import samplesReducer from './samples_reducer';
import sequencesReducer from './sequences_reducer';

const entitiesReducer = combineReducers({
  samples: samplesReducer,
  sequences: sequencesReducer
})

export default entitiesReducer;