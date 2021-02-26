import express from "express";
import { Film } from "../models/Film.mjs";
export const router = express.Router();
import { auth } from "../middleware/auth.mjs";

// Get logged in user
router.get("/", auth, async (req, res) => {
  try {
    const film = await Film.findById(req.film.id);
    res.json(film);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
