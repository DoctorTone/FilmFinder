import { ADD_FILM, SEARCH_FILMS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_FILM:
      return { ...state, films: [...films, action.payload] };

    case SEARCH_FILMS:
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
