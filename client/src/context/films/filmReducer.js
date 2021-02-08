import { ADD_FILM, CLEAR_SEARCH, SEARCH_FILMS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_FILM:
      return { ...state, films: [...state.films, action.payload] };

    case SEARCH_FILMS:
      return { ...state, foundFilms: action.payload };

    case CLEAR_SEARCH:
      return { ...state, foundFilms: null };

    default:
      return state;
  }
};
