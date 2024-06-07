// Packages
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const helmet = require('helmet');

// Middlewares
const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Port
const port = process.env.PORT || 4000;

// Connect DB
const connect = require('./db/dbConnection');

// APIs
const loginRouter = require('./routes/loginRouter');
const coursesRouter = require('./routes/coursesRouter');
const studentsRouter = require('./routes/studentsRouter');
const professorsRouter = require('./routes/professorsRouter');
const semesterRouter = require('./routes/semesterRouter');
const registrationsRouter = require('./routes/registrationsRouter');
const attendancesRouter = require('./routes/attendancesRouter');
const allotmentsRouter = require('./routes/allotmentsRouter');
const lectureRouter = require('./routes/lecturesRouter');

// End Points
app.use("/login",loginRouter);
app.use("/courses",coursesRouter);
app.use("/students",studentsRouter);
app.use("/professors",professorsRouter);
app.use("/semester",semesterRouter);
app.use("/registrations",registrationsRouter);
app.use("/attendances",attendancesRouter);
app.use("/allotments",allotmentsRouter);
app.use("/lecture",lectureRouter);


// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
