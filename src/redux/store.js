import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, Logger));

export default store;
