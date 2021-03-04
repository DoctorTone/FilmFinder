import { SHOW_MESSAGE, REMOVE_MESSAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        msg: action.payload,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        msg: null,
      };
    default:
      return state;
  }
};
