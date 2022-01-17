require("dotenv").config();
require("./Database");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cron = require("node-cron");
const routes = require("./routes");
// const cronJobs = require("./Jobs/DataFetchingJobs");
const PORT = process.env.PORT || 3001;
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use('/api', routes);

app.listen(PORT);
