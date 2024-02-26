const router = require('express').Router();

// used classes
const UserController = require('../controllers/userController');
const Student = require('../models/student');

// end points

// get all students 
router.get("/",
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
router.get("/student",
    async (req,res) => {
        try{
            let studentController = new UserController();
            let result = await studentController.getStudentBy('roll_no',req.body.roll_no);
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

// add student
router.post("/",
    async (req, res) => {
        try{
            let studentController = new UserController();
            let student = new Student();
            student = {
                name: req.body.name,
                roll_no: req.body.roll_no,
                phone_no: req.body.phone_no,
            }
            let result = await studentController.addStudent(student);
    
            if(result.exist){
                console.log(result.message);
                res.status(400).json(result.message);
            }
            else{
                console.log(result);
                res.status(200).json(result.message);
            }
        } catch (error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// edit student
router.put("/",
    async (req, res) => {
        try{
            let studentController = new UserController();
            let studentOld = new Student();
            let studentNew = new Student();

            studentOld.roll_no = req.body.roll_no;
            studentNew.name =  req.body.name;

            let result = await studentController.editStudent(studentOld,studentNew);
            if(!result.exist){
                console.log(result.message);
                res.status(400).json(result.message);
            }
            else{
                console.log(result);
                res.status(200).json(result.message);
            }
        } catch (error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.delete("/",
    async(req,res) => {
        try{
            let studentController = new UserController();
            let student = new Student();
            student.roll_no = req.body.roll_no;

            let result = await studentController.deleteStudent(student);
            if(!result.exist){
                console.log(result.message);
                res.status(400).json(result.message);
            }
            else{
                console.log(result);
                res.status(200).json(result.message);
            }
        }catch(error){
            console.log();
            res.status(500).send(error);
        }
    }
);

//export
module.exports = router;