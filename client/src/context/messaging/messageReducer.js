import { SHOW_MESSAGE, CLEAR_MESSAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return [...state, action.payload];
    case CLEAR_MESSAGE:
      return [];
    default:
      return state;
  }
};
