import { combineReducers } from "redux";

// Reducers
import weatherReducer from "./weather/weatherReducer";

const rootReducer = combineReducers({
  weatherState: weatherReducer,
});

export default rootReducer;
