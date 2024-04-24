const router = require('express').Router();

// used classes
const SessionController = require('../controllers/sessionController');
const Session = require('../models/session');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all sessions 
router.get("/",
    async (req,res) => {
        try{
            let sessionController = new SessionController();
            let results = await sessionController.getAllSessions();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one session 
router.get("/session",
    async (req,res) => {
        try{
            let sessionController = new SessionController();
            let result = await sessionController.getSessionBy('session_id',req.body.session_id);
            if(!result.exist){
                console.log(result.message);
                res.status(200).json(result.message);
            }
            else{
                console.log(result[0]);
                res.status(200).json(result[0]);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get filtered sessions 
router.get("/course/:course_id",
    authenticate,
    async (req,res) => {
        try{
            let sessionController = new SessionController();
            let result = await sessionController.getSessionsByCourse(req.params.course_id);
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/term/:term",
    async (req,res) => {
        try{
            let sessionController = new SessionController();
            let result = await sessionController.getSessionsByTerm(req.params.term);
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/year/:year",
    async (req,res) => {
        try{
            let sessionController = new SessionController();
            let result = await sessionController.getSessionsByYear(req.params.year);
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// add session
router.post("/",
    authorize,
    async (req, res) => {
        try{
            let sessionController = new SessionController();
            let session = new Session();
            session = {
                session_time: req.body.session_time,
                course_id: req.body.course_id,
                year: req.body.year,
                term: req.body.term
            }
            let result = await sessionController.addSession(session);
    
            if(!result.problem){
                console.log(result);
                res.status(200).json(result.message);
            }
            else{
                console.log(result.message);
                res.status(400).json(result.message);
            }
        } catch (error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// edit session
router.put("/",
    authorize,
    async (req, res) => {
        try{
            let sessionController = new SessionController();
            let sessionOld = new Session();
            let sessionNew = new Session();

            sessionOld.session_id = req.body.session_id;
            
            if(req.body.session_time)
                sessionNew.session_time = req.body.session_time;
            if(req.body.course_id)
                sessionNew.course_id = req.body.course_id;
            if(req.body.year)
                sessionNew.year = req.body.year;
            if(req.body.term)
                sessionNew.term = req.body.term;

            let result = await sessionController.editSession(sessionOld,sessionNew);
            if(!result.problem){
                console.log(result);
                res.status(200).json(result.message);
            }
            else{
                console.log(result.message);
                res.status(400).json(result.message);
            }
        } catch (error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.delete("/",
    authorize,
    async(req,res) => {
        try{
            let sessionController = new SessionController();
            let session = new Session();
            session.session_id = req.body.session_id;

            let result = await sessionController.deleteSession(session);
            if(!result.proplem){
                console.log(result);
                res.status(200).json(result.message);
            }
            else{
                console.log(result.message);
                res.status(400).json(result.message);
            }
        }catch(error){
            console.log();
            res.status(500).send(error);
        }
    }
);

//export
module.exports = router;