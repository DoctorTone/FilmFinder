import { SHOW_MESSAGE, REMOVE_MESSAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return [...state, action.payload];
    case REMOVE_MESSAGE:
      return [];
    default:
      return state;
  }
};
