import express from "express";
import { router as auth } from "./routes/auth.mjs";

const app = express();

app.get("/", (req, res) => res.json({ msg: "System OK" }));

// Routes
app.use("/add", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
