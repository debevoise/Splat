import { combineReducers } from 'redux';
import samplesReducer from './samples_reducer';
import sequencesReducer from './sequences_reducer';
import themesReducer from './themes_reducer';

const entitiesReducer = combineReducers({
  samples: samplesReducer,
  themes: themesReducer,
  sequences: sequencesReducer
})

export default entitiesReducer;