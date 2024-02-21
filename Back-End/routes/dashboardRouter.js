const router = require('express').Router();

// database connection
const pool = require ("../db/dbConnection");

// used classes

// end points
router.get("/",
    async (req, res) => {
        try {
            res.status(200).send("ok");
        }catch (err) {
            res.status(500).json({err:err});
        }
});

//export
module.exports = router;
