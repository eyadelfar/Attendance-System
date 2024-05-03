const router = require('express').Router();
const xlsx = require('xlsx');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

// used classes
const RegistrationController = require('../controllers/registrationController');
const Registration = require('../models/registration');

// middlewares
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

/* end points */
// get all registrations 
router.get("/",
    async (req,res) => {
        try{
            let registrationController = new RegistrationController();
            let results = await registrationController.getAllRegistrations();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one registration 
router.get("/registration",
    async (req,res) => {
        try{
            let registrationController = new RegistrationController();
            let result = await registrationController.getRegistrationBy({
                student_id:req.body.student_id,
                course_id:req.body.course_id
            });
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

// get filtered registrations
router.get("/student/:student_id",
    authenticate,
    async (req,res) => {
        try{
            let registrationController = new RegistrationController();
            let result = await registrationController.getRegistrationsByStudent({student_id:req.params.student_id});
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

router.get("/course/:course_id",
    authorize,
    async (req,res) => {
        try{
            let registrationController = new RegistrationController();
            let result = await registrationController.getRegistrationsByCourse({course_id:req.params.course_id});
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// add registration
router.post("/",
    async (req, res) => {
        try{
            let registrationController = new RegistrationController();
            let registration = new Registration();
            registration = {
                student_id: req.body.student_id,
                course_id: req.body.course_id,
            }
            let result = await registrationController.addRegistration(registration);
    
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

// import registration sheet
router.post("/upload",
    authorize,
    upload.single('registrationSheet'), 
    async (req, res) => {
        try{
            const workbook = xlsx.readFile(req.file.path);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = xlsx.utils.sheet_to_json(worksheet, { header: 1, range: 0  });
            
            let registrationController = new RegistrationController();
            let result = await registrationController.importRegistrations(data);
            
            // fs.unlinkSync(req.file.path);
            res.status(200).send(result.message);
        } catch (error){
            // fs.unlinkSync(req.file.path);
            console.log(error);
            res.status(500).json(error);
        }
    }
);
/*
// edit registration
router.put("/",
    async (req, res) => {
        try{
            let registrationController = new RegistrationController();
            let registrationOld = new Registration();
            let registrationNew = new Registration();

            registrationOld.student_id = req.body.student_id;
            registrationOld.course_id = req.body.course_id;

            if(req.body.student_id)
                registrationNew.student_id = req.body.student_id;
            if(req.body.course_id)
                registrationNew.course_id = req.body.course_id;

            let result = await registrationController.editRegistration(registrationOld,registrationNew);
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
*/
router.delete("/",
    async(req,res) => {
        try{
            let registrationController = new RegistrationController();
            let registration = new Registration();
            registration.course_id = req.body.course_id;
            registration.student_id = req.body.student_id;

            let result = await registrationController.deleteRegistration(registration);
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