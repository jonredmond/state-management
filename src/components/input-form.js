import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/list";

const InputForm = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addItem(item));
        setItem("");
      }}
    >
      <label>Input: </label>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button type="submit">Submit!</button>
    </form>
  );
};

export default InputForm;
