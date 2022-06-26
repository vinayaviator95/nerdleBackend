const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
env.config();
const NerdleController = require("./nerdleController");
const HealthController = require("./healthController");
app.use(express.json());
app.use(cors());
app.use("/nerdle", NerdleController);
app.use("/", HealthController);

app.listen(process.env.PORT || 4000, (error) => {
  if (error) throw error;
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
