import { combineReducers } from "redux";
// import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from './errors_reducer';
import sessionReducer from "./session_reducer";
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
