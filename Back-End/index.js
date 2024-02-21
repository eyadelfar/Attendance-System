// Packages
const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const app = express();

// Middlewares
app.use(cors());

// Port
const port = process.env.PORT || 2002;

// Connect DB
const connectDB = require('./db/dbConnection');

// APIs
const loginRouter = require('./routes/loginRouter');
const dashboardRouter = require('./routes/dashboardRouter');
const coursesRouter = require('./routes/coursesRouter');
const studentsRouter = require('./routes/studentsRouter');
const professorsRouter = require('./routes/professorsRouter');
const sessionsRouter = require('./routes/sessionsRouter');
const settingsRouter = require('./routes/settingsRouter');

// End Points
app.use("/login",loginRouter);
app.use("/dashboard",dashboardRouter);
app.use("/courses",coursesRouter);
app.use("/students",studentsRouter);
app.use("/professors",professorsRouter);
app.use("/sessions",sessionsRouter);
app.use("/settings",settingsRouter);

// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
