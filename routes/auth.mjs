import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.send("Add films to database");
});
