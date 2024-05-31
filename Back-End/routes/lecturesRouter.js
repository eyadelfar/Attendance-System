const router = require('express').Router();

// used classes
const LectureController = require('../controllers/lectureController');
const Lecture = require('../models/lecture');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all lectures 
router.get("/",
    authorize,
    async (req,res) => {
        try{
            let lectureController = new LectureController();
            let results = await lectureController.getAllLectures();
            
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one lecture 
router.get("/lecture/:lecture_id",
    authenticate,
    async (req,res) => {
        try{
            let lectureController = new LectureController();
            let result = await lectureController.getLectureDetailed({
                lecture_id:req.params.lecture_id
            });
            console.log(result[0]);
            res.status(200).json(result[0]);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get filtered lectures 
router.get("/semester/:semester_id",
    authenticate,
    async (req,res) => {
        try{
            let lectureController = new LectureController();
            let results = await lectureController.getLecturesBySemester({
                semester_id: req.params.semester_id
            });
            
            console.log(results);
            res.status(200).json(results);
            
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// add lecture
router.post("/",
    authorize,
    async (req, res) => {
        try{
            let lectureController = new LectureController();
            let lecture = new Lecture();
            lecture = {
                lecture_date: req.body.lecture_date,
                lecture_time: req.body.lecture_time,
                semester_id: req.body.semester_id,
                course_id: req.body.course_id
            };

            let result = await lectureController.addLecture(lecture);
    
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

// edit lecture
router.put("/",
    authorize,
    async (req, res) => {
        try{
            let lectureController = new LectureController();
            let lectureOld = new Lecture();
            let lectureNew = new Lecture();

            lectureOld.lecture_id = req.body.lecture_id;

            if(req.body.lecture_date)
                lectureNew.lecture_date = req.body.lecture_date;
            if(req.body.lecture_time)
                lectureNew.lecture_time = req.body.lecture_time;
            if(req.body.course_id)
                lectureNew.course_id = req.body.course_id;
            if(req.body.semester_id)
                lectureNew.semester_id = req.body.semester_id;

            let result = await lectureController.editLecture(lectureOld,lectureNew);
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

router.delete("/:lecture_id",
    authorize,
    async(req,res) => {
        try{
            let lectureController = new LectureController();
            let lecture = new Lecture();
            lecture.lecture_id = req.params.lecture_id;

            let result = await lectureController.deleteLecture(lecture);
            if(!result.problem){
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