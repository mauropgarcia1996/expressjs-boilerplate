require("dotenv").config();
const app = require("./Utils/express");
const mongoose = require("./Utils/mongoose");
const port = process.env.API_URL;

mongoose.connect();
app.listen(port, () => console.log("We are connected."));