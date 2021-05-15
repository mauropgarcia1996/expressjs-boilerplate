require("dotenv").config();
const app = require("./Utils/express");
const mongoose = require("./Utils/mongoose");
const port = process.env.API_URL;

let mongoDb = mongoose.connect();
mongoDb.on('error', (e) => console.log(e));
mongoDb.once('open', () => console.log('MongoDB Connected'))
app.listen(port, () => console.log("We are live."));