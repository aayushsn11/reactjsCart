import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginreducer from "./reducer/authReducer";
import dashboardReducer from "./reducer/dashboardReducer";

let rootreducer = combineReducers({
  auth: loginreducer,
  dashboard: dashboardReducer,
});

let store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
