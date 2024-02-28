// Packages
const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
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
const sessionsRouter = require('./routes/sessionsRouter');

// End Points
app.use("/login",loginRouter);
app.use("/courses",coursesRouter);
app.use("/students",studentsRouter);
app.use("/professors",professorsRouter);
app.use("/sessions",sessionsRouter);


// Test
const UserController = require ('./controllers/userController');
const DBQuery = require ('./db/dbQuery');
const User = require("./models/user");
const Student = require("./models/student");

app.post('/test', async(req, res) => {
    try{
        let userC = new UserController();
        let student = new Student();
        student = {
            name: req.body.name,
            roll_no: req.body.roll_no,
            phone_no: req.body.phone_no
        }
        let results = await userC.addStudent(student);

        if(results.error)
            throw results.error.sqlMessage

        console.log(results);
        res.send('Added Successfully');
            
    } catch (error){
        console.error(error);
        res.status(500).json(error);
    }
});

// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
