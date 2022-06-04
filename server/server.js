const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

const routes = require("./controllers");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.listen(PORT, () => console.log("Now listening on port ", PORT));
