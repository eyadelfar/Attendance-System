const router = require('express').Router();

// used classes
const SemesterController = require('../controllers/semesterController');
const Semester = require('../models/semester');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all semesters 
router.get("/",
    async (req,res) => {
        try{
            let semesterController = new SemesterController();
            let results = await semesterController.getAllSemesters();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one semester 
router.get("/semester",
    async (req,res) => {
        try{
            let semesterController = new SemesterController();
            let result = await semesterController.getSemesterBy({semester_id:req.body.semester_id});
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

// get filtered semesters 
router.get("/course/:course_id",
    authenticate,
    async (req,res) => {
        try{
            let semesterController = new SemesterController();
            let result = await semesterController.getSemestersByCourse({course_id:req.params.course_id});
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
            let semesterController = new SemesterController();
            let result = await semesterController.getSemestersByTerm({term:req.params.term});
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
            let semesterController = new SemesterController();
            let result = await semesterController.getSemestersByYear({year:req.params.year});
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// add semester
router.post("/",
    authorize,
    async (req, res) => {
        try{
            let semesterController = new SemesterController();
            let semester = new Semester();
            semester = {
                faculty_id: req.body.faculty_id,
                course_id: req.body.course_id,
                year: req.body.year,
                term: req.body.term
            }
            let result = await semesterController.addSemester(semester);
    
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

// edit semester
router.put("/",
    authorize,
    async (req, res) => {
        try{
            let semesterController = new SemesterController();
            let semesterOld = new Semester();
            let semesterNew = new Semester();

            semesterOld.semester_id = req.body.semester_id;
            
            if(req.body.year)
                semesterNew.year = req.body.year;
            if(req.body.term)
                semesterNew.term = req.body.term;
            if(req.body.course_id)
                semesterNew.course_id = req.body.course_id;
            if(req.body.faculty_id)
                semesterNew.faculty_id = req.body.faculty_id;

            let result = await semesterController.editSemester(semesterOld,semesterNew);
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
            let semesterController = new SemesterController();
            let semester = new Semester();
            semester.semester_id = req.body.semester_id;

            let result = await semesterController.deleteSemester(semester);
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