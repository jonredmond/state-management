import React from "react";
import { useDispatch } from "react-redux";

import { incrementCounter } from "../actions/count";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
  );
};

export default Button;
