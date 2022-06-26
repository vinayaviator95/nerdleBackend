const express = require("express");
const cors = require("cors");
const app = express();
const NerdleController = require("./nerdleController");
app.use(express.json());
app.use(cors());
app.use("/nerdle", NerdleController);

app.listen(4000, (error) => {
  if (error) throw error;
  console.log("Server is running on port 4000");
});
