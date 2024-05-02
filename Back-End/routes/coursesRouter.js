const router = require('express').Router();

// used classes
const CourseController = require('../controllers/courseController');
const Course = require('../models/course');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all courses 
router.get("/",
    authorize,
    async (req,res) => {
        try{
            let courseController = new CourseController();
            let results = await courseController.getAllCourses();
            
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one course 
router.get("/course",
    authenticate,
    async (req,res) => {
        try{
            let courseController = new CourseController();
            let result = await courseController.getCourseBy({course_id:req.body.course_id});
            if(!result.exist){
                console.log(result.message);
                res.status(400).json(result.message);
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

// add course
router.post("/",
    authorize,
    async (req, res) => {
        try{
            let courseController = new CourseController();
            let course = new Course();
            course = {
                code: req.body.code,
                title: req.body.title,
                credit: req.body.credit,
            }
            let result = await courseController.addCourse(course);
    
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

// edit course
router.put("/",
    authorize,
    async (req, res) => {
        try{
            let courseController = new CourseController();
            let courseOld = new Course();
            let courseNew = new Course();

            courseOld.course_id = req.body.course_id;

            if(req.body.code)
                courseNew.code = req.body.code;
            if(req.body.title)
                courseNew.title = req.body.title;
            if(req.body.credit)
                courseNew.credit = req.body.credit;

            let result = await courseController.editCourse(courseOld,courseNew);
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
            let courseController = new CourseController();
            let course = new Course();
            course.course_id = req.body.course_id;

            let result = await courseController.deleteCourse(course);
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