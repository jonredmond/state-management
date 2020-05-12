import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const items = useSelector((state) => state.list);

  return items.map((item) => <p>{item}</p>);
};

export default List;
