const router = require('express').Router();

// database connection
const connect = require ("../db/dbConnection");

// used classes

// end points
router.get("/",
    async (req, res) => {
        try {
            res.status(200).send("ok");
        }catch (error) {
            res.status(500).json({error:error});
        }
});

//export
module.exports = router;
