import { SET_LIST } from '../actions/types';

const list = (state = [], action) => {
  switch (action.type) {
    case SET_LIST: {
      return action.list;
    }
    default: {
      return state;
    }
  }
};

export default list;
