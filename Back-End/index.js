// Packages
const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');

const authenticate = require("./middleware/authentication");
const authorize = require("./middleware/authorization");

// Middlewares
const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
const xlsx = require('xlsx');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
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

// Test
const LectureController=require('./controllers/lectureController');

app.put('/test/:lecture_id', 
    async (req, res) => {
        const lectureController = new LectureController();

        let lecture = {
            lecture_date: req.body.lecture_date,
            lecture_time: req.body.lecture_time,
            semester_id: req.body.semester_id,
            course_id: req.body.course_id
        }
        result = await lectureController.editLecture(
            {lecture_id:req.params.lecture_id},
            lecture
        );

        if(result.problem){
            console.log(result.message);
            res.send(result.message);
        }
        else{
            console.log(result);
            res.send(result);
        }

});



// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
