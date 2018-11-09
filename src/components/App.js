import React from "react";

import { Provider } from "react-redux";

import { configureStore } from "../store";

import * as TodoActions from "../actions";

import Container from "./Container";

const store = configureStore();

store.dispatch(TodoActions.GetTodos());

const App = props => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
