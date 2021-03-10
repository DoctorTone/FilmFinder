import { ADD_FILM, CLEAR_FILTER, GET_FILMS, FILTER_FILMS } from "../types";

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

    case CLEAR_FILTER:
      return { ...state, foundFilms: null };

    default:
      return state;
  }
};
