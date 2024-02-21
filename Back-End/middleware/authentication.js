// database connection
const pool = require ("../db/dbConnection");

// authentication
const authentication =async (req, res, next) =>{
    try{
        
        next();
    }catch(err){
        
    }
};

//export
module.exports = authentication;