// Packages
const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(cors());

// Port
const port = process.env.PORT || 4000;

// Connect DB
const connectDB = require('./db/dbConnection');

// APIs

// End Points
app.get('/',async (req, res)=>{
    try{
        console.log("SERVER IS RUNINNG AT: "+4000);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});
// Run
app.listen(port,()=>{
    console.log(`Listening at ${port}..!`)
});
