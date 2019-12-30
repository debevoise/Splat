import { combineReducers } from "redux";
// import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;
