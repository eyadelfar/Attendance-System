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


// Test
const UserController = require ('./controllers/userController');
const DBQuery = require ('./db/dbQuery');

app.post('/test', async(req, res) => {

    try{
        let user = new UserController();

        let results = await user.getOneUserByUsername(req.body.username);

        console.log(results);
        res.send(results);
            
    } catch (error){
        console.error(error);
        res.status(500).json('server error');
    }
});

// Run
app.listen(port,"localhost", ()=>{
    console.log(`SERVER IS RUNINNG AT: ${port}`);
});
