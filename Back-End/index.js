// Packages
const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');

const authenticate = require("./middleware/authentication");

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
const sessionsRouter = require('./routes/sessionsRouter');
const registrationsRouter = require('./routes/registrationsRouter');
const attendancesRouter = require('./routes/attendancesRouter');
const allotmentsRouter = require('./routes/allotmentsRouter');

// End Points
app.use("/login",loginRouter);
app.use("/courses",coursesRouter);
app.use("/students",studentsRouter);
app.use("/professors",professorsRouter);
app.use("/sessions",sessionsRouter);
app.use("/registrations",registrationsRouter);
app.use("/attendances",attendancesRouter);
app.use("/allotments",allotmentsRouter);


// Test
const UserController = require ('./controllers/userController');
const DBQuery = require ('./db/dbQuery');
const User = require("./models/user");
const Student = require("./models/student");

app.get('/test', 
authenticate,
    async(req, res) => {
    try{
        // const decodedToken = jwt.verify(req.headers['authorization'], "secret_key");
        // console.log("Decoded Token:", decodedToken);

        res.status(200).json('ok');
    } catch (error){
        console.error(error);
        res.status(500).json(error);
    }
});

// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
