const router = require('express').Router();
const moment = require('moment');

// used classes
const AttendanceController = require('../controllers/attendanceController');
const Attendance = require('../models/attendance');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all attendances 
router.get("/",
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getAllAttendances();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one attendance 
router.get("/attendance",
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let result = await attendanceController.getAttendanceBy({attendance_id:req.body.attendance_id});
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

// get detailed attendance
router.get("/detailed",
    authenticate,
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getDetailedAttendance({
                student_id:req.body.student_id
            });
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
});

// get filtered attendance 
router.get("/course",
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getAttendancesByCourse({
                course_id:req.body.course_id
            });
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/semester",
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getAttendancesBySemester({
                semester_id:req.body.semester_id
            });
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/student",
    authenticate,
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getAttendancesByStudent({
                student_id:req.body.student_id
            });
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/studentInLecture/:lecture_id/:student_id",
    authenticate,
    async (req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let results = await attendanceController.getAttendancesByStudentInLecture(
                req.params.student_id,
                req.params.lecture_id
            );
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);
// add attendance
router.post("/",
    authenticate,
    async (req, res) => {
        try{
            let attendanceController = new AttendanceController();
            let attendance = new Attendance();
            attendance = {
                course_id: req.body.course_id,
                semester_id: req.body.semester_id,
                student_id: req.body.student_id,
                lecture_id: req.body.lecture_id,
                status: req.body.status,
                timestamp: req.body.timestamp,
            }
            let result = await attendanceController.addAttendance(attendance);
    
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

// edit attendance
router.put("/",
    async (req, res) => {
        try{
            let attendanceController = new AttendanceController();
            let attendanceOld = new Attendance();
            let attendanceNew = new Attendance();

            attendanceOld.attendance_id = req.body.attendance_id;
            
            if(req.body.semester_id)
                attendanceNew.semester_id = req.body.semester_id;
            if(req.body.course_id)
                attendanceNew.course_id = req.body.course_id;
            if(req.body.timestamp)
                attendanceNew.timestamp = req.body.timestamp;
            if(req.body.student_id)
                attendanceNew.student_id = req.body.student_id;
            if(req.body.status)
                attendanceNew.status = req.body.status;
            if(req.body.lecture_id)
                attendanceNew.status = req.body.lecture_id;

            let result = await attendanceController.editAttendance(attendanceOld,attendanceNew);
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
    async(req,res) => {
        try{
            let attendanceController = new AttendanceController();
            let attendance = new Attendance();
            attendance.attendance_id = req.body.attendance_id;

            let result = await attendanceController.deleteAttendance(attendance);
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