import { INCREMENT_COUNTER } from "../actions/count";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + action.value;
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
