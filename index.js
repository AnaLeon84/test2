const express = require('express');
require("dotenv").config();
const articles = require('./data/articles.json');

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, ()=> {
    console.log(`App listening at https://localhost:${PORT}`);
})

const app = express()