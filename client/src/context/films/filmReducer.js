import {
  ADD_FILM,
  CLEAR_FILTER,
  GET_FILMS,
  FILTER_FILMS,
  FILTER_FILMS_YEAR,
  FILTER_FILMS_CATEGORY,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_FILM:
      return { ...state, films: [...state.films, action.payload] };

    case GET_FILMS:
      return { ...state, films: action.payload };

    case FILTER_FILMS:
      return {
        ...state,
        foundFilms: state.films.filter((film) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return film.name.match(regex);
        }),
      };

    case FILTER_FILMS_CATEGORY:
      return {
        ...state,
        foundFilms: state.films.filter((film) => {
          const regex = new RegExp(`${action.payload.text}`, "gi");
          return film[action.payload.category].match(regex);
        }),
      };

    case CLEAR_FILTER:
      return { ...state, foundFilms: [] };

    default:
      return state;
  }
};
