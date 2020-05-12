import { ADD_ITEM } from "../actions/list";

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.item];
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
