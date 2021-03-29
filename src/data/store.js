import { createStore, compose, applyMiddleware } from "redux"
import reducer from "./reducers"
import initial from "./initial"
import thunk from "redux-thunk";
// import persistState from "redux-localstorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));

export default store;