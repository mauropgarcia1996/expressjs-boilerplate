require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.API_URL;

const api = require('./api')

app.use("/api", api)

app.listen(port, () => {
    console.log(`REST Client listening at ${process.env.API_HOST}:${port}`);
})