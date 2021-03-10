import express from "express";
import { Film } from "../models/Films.mjs";
export const router = express.Router();
import { auth } from "../middleware/auth.mjs";
import { check, validationResult } from "express-validator";

// Get all films
router.get("/", async (req, res) => {
  try {
    // DEBUG
    console.log("Req = ", req.user);

    const films = await Film.find();
    res.json(films);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Add new film
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, year, genre } = req.body;

    try {
      const newFilm = new Film({
        name,
        year,
        genre,
      });

      const film = await newFilm.save();

      res.json(film);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
