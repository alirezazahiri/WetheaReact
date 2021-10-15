import { createStore, applyMiddleware } from "redux";

// Root Reducer
import rootReducer from "./rootReducer";

// thunk
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
