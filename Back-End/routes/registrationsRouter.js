const router = require('express').Router();

// used classes
const RegistrationController = require('../controllers/registrationController');
const Registration = require('../models/registration');

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
            let result = await registrationController.getRegistrationBy('registration_id',req.body.registration_id);
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

// edit registration
router.put("/",
    async (req, res) => {
        try{
            let registrationController = new RegistrationController();
            let registrationOld = new Registration();
            let registrationNew = new Registration();

            registrationOld.registration_id = req.body.registration_id;

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

router.delete("/",
    async(req,res) => {
        try{
            let registrationController = new RegistrationController();
            let registration = new Registration();
            registration.registration_id = req.body.registration_id;

            let result = await registrationController.deleteRegistration(registration);
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