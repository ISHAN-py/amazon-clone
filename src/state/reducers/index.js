import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  item: itemReducer,
  user: userReducer,
});

export default reducers;
