import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import FilmContext from "./filmContext";
import filmReducer from "./filmReducer";
import { ADD_FILM, GET_FILMS, FILTER_FILMS, CLEAR_SEARCH } from "../types";
import axios from "axios";

const FilmState = (props) => {
  const initialState = {
    films: [],
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

  // Get films
  const getFilms = async () => {
    try {
      const results = await axios.get("/films");

      dispatch({ type: GET_FILMS, payload: results.data });
    } catch (error) {
      // DEBUG
      console.log("Get error = ", error);
    }
  };

  // Filter (search) films
  const filterFilms = async () => {
    try {
      const results = await axios.get("/films");
      // DEBUG
      console.log("Films = ", results.data);

      dispatch({ type: FILTER_FILMS, payload: results.data });
    } catch (error) {
      // DEBUG
      console.log("Search error = ", error);
    }
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
        getFilms,
        filterFilms,
        clearSearch,
      }}
    >
      {props.children}
    </FilmContext.Provider>
  );
};

export default FilmState;
