import express from "express";
import bcrypt from "bcryptjs";
export const router = express.Router();
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";

import { User } from "../models/User.mjs";

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, password } = req.body;

    try {
      let user = await User.findOne({ name });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get("jwtSecret"), {
        expiresIn: 360000,
      });
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
