// eslint-disable-next-line
import React, { Component } from "react";

//import { Routes } from './Routes'

import { Provider } from "react-redux";

import { configureStore } from "../store";

import * as TodoActions from "../actions";

const store = configureStore();

store.dispatch(TodoActions.GetTodos());

const App = props => {
  return (
    <Provider store={store}>
      <div>Mehhhh</div>
    </Provider>
  );
};

export default App;
