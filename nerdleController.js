const express = require("express");
const router = express.Router();

const wordAle = "2*3+5=11";

router.post("/checkAnswer", (req, res) => {
  const guess = req.body.guess;
  if (!guess) res.status(400).send({ error: "guess property is missing" });
  if (wordAle === guess) {
    res.status(200).send({ correct: true });
  } else {
    res.status(200).send({ correct: false });
  }
});
module.exports = router;
