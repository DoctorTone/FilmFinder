import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import FilmContext from "./filmContext";
import filmReducer from "./filmReducer";
import { ADD_FILM, SEARCH_FILMS } from "../types";

function searchForFilm(name, films) {
  if (!name) return [];

  let nameLower = name.toLowerCase();
  let filmLower;
  for (let i = 0; i < films.length; ++i) {
    filmLower = films[i].name.toLowerCase();
    if (filmLower.indexOf(nameLower) >= 0) {
      return films[i];
    }
  }

  return null;
}

const FilmState = (props) => {
  const initialState = {
    films: [
      {
        id: 1,
        name: "Taste the Blood of Dracula",
        year: "1972",
        genre: "vampire",
        type: "video",
      },
      {
        id: 2,
        name: "The Exorcist",
        year: "1973",
        genre: "possession",
        type: "blu-ray",
      },
      {
        id: 3,
        name: "Paranormal Activity",
        year: "2005",
        genre: "found footage",
        type: "blu-ray",
      },
    ],
    foundFilms: [],
  };

  const [state, dispatch] = useReducer(filmReducer, initialState);

  // Add film
  const addFilm = (film) => {
    film.id = uuidv4();
    dispatch({ type: ADD_FILM, payload: film });
  };

  // Search films
  const searchFilms = (text) => {
    const results = searchForFilm(text, initialState.films);

    // DEBUG
    console.log("Films = ", results);

    dispatch({ type: SEARCH_FILMS, payload: results });
  };

  return (
    <FilmContext.Provider
      value={{
        films: state.films,
        foundFilms: state.foundFilms,
        addFilm,
        searchFilms,
      }}
    >
      {props.children}
    </FilmContext.Provider>
  );
};

export default FilmState;
