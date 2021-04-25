require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.API_URL;

const api = require("./api");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:root@cluster0.sqfon.mongodb.net/expressjs-boilerplate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("WE ARE CONNECTED");
});
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api", api);

app.listen(port, () => {
  console.log(`REST Client listening at ${process.env.API_HOST}:${port}`);
});
