import { ADD_FILM } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_FILM:
      return { ...state, films: [...films, action.payload] };

    default:
      return state;
  }
};
