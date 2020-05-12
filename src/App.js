import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";

import Button from "./components/button";
import Counter from "./components/counter";

import store from "./reducers";
import InputForm from "./components/input-form";
import List from "./components/list";

const App = (props) => {
  return (
    <Provider store={store}>
      <Counter />
      <Button />
      <InputForm />
      <List />
    </Provider>
  );
};

export default hot(App);
