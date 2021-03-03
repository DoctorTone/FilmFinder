import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import FilmContext from "./filmContext";
import filmReducer from "./filmReducer";
import { ADD_FILM, SEARCH_FILMS, CLEAR_SEARCH } from "../types";
import axios from "axios";

function searchForFilm(name, films) {
  if (!name) return [];

  let nameLower = name.toLowerCase();
  let filmLower;
  const found = [];
  for (let i = 0; i < films.length; ++i) {
    filmLower = films[i].name.toLowerCase();
    if (filmLower.indexOf(nameLower) >= 0) {
      found.push(films[i]);
    }
  }

  return found || null;
}

const FilmState = (props) => {
  const initialState = {
    films: [
      {
        id: 1,
        name: "Taste the Blood of Dracula",
        year: "1972",
        genre: "vampire",
      },
      {
        id: 2,
        name: "The Exorcist",
        year: "1973",
        genre: "possession",
      },
      {
        id: 3,
        name: "Paranormal Activity",
        year: "2005",
        genre: "found footage",
      },
    ],
    foundFilms: [],
  };

  const [state, dispatch] = useReducer(filmReducer, initialState);

  // Add film
  const addFilm = async (film) => {
    // Add film to database
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/films", film, config);
      dispatch({ type: ADD_FILM, payload: res.data });
    } catch (error) {
      // DEBUG
      console.log("Couldn't add film!!");
    }
  };

  // Search films
  const searchFilms = (text) => {
    const results = searchForFilm(text, initialState.films);

    // DEBUG
    console.log("Films = ", results);

    dispatch({ type: SEARCH_FILMS, payload: results });
  };

  // Clear search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  return (
    <FilmContext.Provider
      value={{
        films: state.films,
        foundFilms: state.foundFilms,
        addFilm,
        searchFilms,
        clearSearch,
      }}
    >
      {props.children}
    </FilmContext.Provider>
  );
};

export default FilmState;
