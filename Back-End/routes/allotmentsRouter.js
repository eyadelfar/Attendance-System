const router = require('express').Router();

// used classes
const AllotmentController = require('../controllers/allotmentController');
const Allotment = require('../models/allotment');

/* end points */
// get all allotments 
router.get("/",
    async (req,res) => {
        try{
            let allotmentController = new AllotmentController();
            let results = await allotmentController.getAllAllotments();
            console.log(results);
            res.status(200).json(results);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
);

// get one allotment 
router.get("/allotment",
    async (req,res) => {
        try{
            let allotmentController = new AllotmentController();
            let result = await allotmentController.getAllotmentBy('allotment_id',req.body.allotment_id);
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

// add allotment
router.post("/",
    async (req, res) => {
        try{
            let allotmentController = new AllotmentController();
            let allotment = new Allotment();
            allotment = {
                faculty_id: req.body.faculty_id,
                course_id: req.body.course_id,
                semester_id: req.body.semester_id,
                allotment_date: req.body.allotment_date
            }
            let result = await allotmentController.addAllotment(allotment);
    
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

// edit allotment
router.put("/",
    async (req, res) => {
        try{
            let allotmentController = new AllotmentController();
            let allotmentOld = new Allotment();
            let allotmentNew = new Allotment();

            allotmentOld.allotment_id = req.body.allotment_id;
            
            if(req.body.faculty_id)
                allotmentNew.faculty_id = req.body.faculty_id;
            if(req.body.course_id)
                allotmentNew.course_id = req.body.course_id;
            if(req.body.semester_id)
                allotmentNew.semester_id = req.body.semester_id;
            if(req.body.allotment_date)
                allotmentNew.allotment_date = req.body.allotment_date;

            let result = await allotmentController.editAllotment(allotmentOld,allotmentNew);
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
            let allotmentController = new AllotmentController();
            let allotment = new Allotment();
            allotment.allotment_id = req.body.allotment_id;

            let result = await allotmentController.deleteAllotment(allotment);
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