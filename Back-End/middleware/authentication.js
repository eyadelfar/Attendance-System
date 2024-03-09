
const jwt = require('jsonwebtoken');

const authentication =async (req, res, next) =>{
    try{
        const token = req.headers['authorization'];
        console.log(token);
        if(!token) 
            return res.status(403).send("sorry you must login first");

         // Verify and decode JWT (HMAC)
         try {
            const decodedToken = jwt.verify(token, "secret_key");
            console.log(decodedToken);
        } catch (error) {
            console.error("JWT verification failed:", error.message);
        }

        next();
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = authentication;