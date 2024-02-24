// database connection
const connect = require ("../db/dbConnection");

// authentication
const authentication =async (req, res, next) =>{
    try{
        
        next();
    }catch(error){
        
    }
};

//export
module.exports = authentication;