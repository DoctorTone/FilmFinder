import mongoose from "mongoose";

const FilmSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

export const Film = mongoose.model("film", FilmSchema);
