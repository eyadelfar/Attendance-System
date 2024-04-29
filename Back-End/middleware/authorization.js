const jwt = require('jsonwebtoken');

const authorization =async (req, res, next) =>{
    try{
        const token = req.headers['authorization'];
        if(!token) 
            return res.status(403).send("sorry you must login first");
        console.log(`user's token: ${token}`);

         // Verify and decode JWT (HMAC)
         try {
            const decodedToken = jwt.verify(token, "secret_key");
            if(!decodedToken.admin)
                return res.status(403).send("sorry you are not authorized for this request");

        } catch (error) {
            console.error("JWT verification failed:", error.message);
        }

        next();
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = authorization;