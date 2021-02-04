import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ msg: "System OK" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
