const router = require('express').Router();

// used classes
const UserController = require('../controllers/userController');
const Student = require('../models/student');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
 
/* end points */
// get all students 
router.get("/",
    authorize,
    async (req,res) => {
        try{
            let studentController = new UserController();
            let results = await studentController.getAllStudents();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one student 
router.get("/student/:student_id",
    authenticate,
    async (req,res) => {
        try{
            let studentController = new UserController();
            let result = await studentController.getStudentsBy({
                student_id:req.params.student_id
            });
            if(result.exist){
                console.log(result[0]);
                res.status(200).json(result[0]);
            }
            else{
                console.log(result.message);
                res.status(400).json(result.message);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// add student
router.post("/",
    authorize,
    async (req, res) => {
        try{
            let studentController = new UserController();
            let student = new Student();
            student = {
                fullname: req.body.fullname,
                roll_no: req.body.roll_no,
                phone_no: req.body.phone_no,
                level: req.body.level,
                password: req.body.password,
            }
            let result = await studentController.addStudent(student);
    
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

// edit student
router.put("/",
    authenticate,
    async (req, res) => {
        try{
            let studentController = new UserController();
            let studentOld = new Student();
            let studentNew = new Student();

            let result = await studentController.getStudentsBy({
                student_id: req.body.student_id
            });
            if(!result.exist){
                console.log(result.message);
                res.status(404).json(result.message);
                return;
            }
            
            studentOld = result[0];
            
            if(req.body.roll_no)
                studentNew.roll_no = req.body.roll_no;
            if(req.body.fullname)
                studentNew.fullname = req.body.fullname;
            if(req.body.phone_no)
                studentNew.phone_no = req.body.phone_no;
            if(req.body.level)
                studentNew.level = req.body.level;
            
            if(req.body.passwordNew)
                if(studentOld.password === req.body.passwordOld)
                    studentNew.password = req.body.passwordNew;
                else{
                    result.message = "passwords do not match";
                    console.log(result);
                    res.status(400).json(result.message);
                }
            
            result = await studentController.editStudent(studentOld,studentNew);
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

// delete student
router.delete("/:student_id",
    authorize,
    async(req,res) => {
        try{
            let studentController = new UserController();
            let student = new Student();
            student.student_id = req.params.student_id;

            let result = await studentController.deleteStudent(student);
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