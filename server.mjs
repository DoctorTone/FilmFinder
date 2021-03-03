import express from "express";
import connectDB from "./config/db.mjs";
import { router as auth } from "./routes/auth.mjs";
import { router as users } from "./routes/users.mjs";
import { router as films } from "./routes/films.mjs";

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "System OK" }));

// Routes
app.use("/users", users);
app.use("/auth", auth);
app.use("/films", films);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
