const router = require('express').Router();

// used classes
const UserController = require('../controllers/userController');
const Professor = require('../models/professor');

/* end points */
// get all professors 
router.get("/",
    async (req,res) => {
        try{
            let professorController = new UserController();
            let results = await professorController.getAllProfessors();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one professor 
router.get("/professor",
    async (req,res) => {
        try{
            let professorController = new UserController();
            let result = await professorController.getProfessorBy('faculty_id',req.body.faculty_id);
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

// add professor
router.post("/",
    async (req, res) => {
        try{
            let professorController = new UserController();
            let professor = new Professor();
            professor = {
                fullname: req.body.fullname,
                username: req.body.username,
                password: req.body.password
            }
            let result = await professorController.addProfessor(professor);
    
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

// edit professor
router.put("/",
    async (req, res) => {
        try{
            let professorController = new UserController();
            let professorOld = new Professor();
            let professorNew = new Professor();

            professorOld.faculty_id = req.body.faculty_id;
            
            if(req.body.username)
                professorNew.username = req.body.username;
            if(req.body.fullname)
                professorNew.fullname = req.body.fullname;
            if(req.body.password)
                professorNew.password = req.body.password;
            


            let result = await professorController.editProfessor(professorOld,professorNew);
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
            let professorController = new UserController();
            let professor = new Professor();
            professor.faculty_id = req.body.faculty_id;

            let result = await professorController.deleteProfessor(professor);
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
