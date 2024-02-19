// Packages
const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const app = express();

// Middlewares
app.use(cors());

// Port
const port = process.env.PORT || 4000;

// Connect DB
const connectDB = require('./db/dbConnection');

// APIs

// End Points

// Run
app.listen(4000,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT:${port}`);
});
