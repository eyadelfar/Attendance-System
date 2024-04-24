
const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) =>{
    try{
        const token = req.headers['authorization'];
        if(!token) 
            return res.status(403).send("sorry you must login first");
        console.log(token);
        next();
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = authentication;