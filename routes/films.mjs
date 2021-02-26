import express from "express";
import { Film } from "../models/Films.mjs";
export const router = express.Router();
import { check, validationResult } from "express-validator";

// Get logged in user
router.get("/", async (req, res) => {
  try {
    const films = await Film.find(req.film.id);
    res.json(films);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
