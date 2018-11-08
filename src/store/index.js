import { createStore, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}
