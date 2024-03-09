const router = require('express').Router();
const {body, validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');

// used classes
const UserController = require ('../controllers/userController');

router.post("/",
    body("password")
      .isLength({min:6})
      .withMessage("password shouldn't be less than 6 characters"),
    async (req, res) => {
  try {
    const errors = validationResult(req);
    
    // check errors
    if (!errors.isEmpty()) 
      return res.status(400).json({errors:errors.array ()});

    // login with id & password
    let userController = new UserController();
    let user = await userController.getUserByUsername(
      req.body.username
    );

    // check existance
    if(!user.length) 
      return res.status(404).json('USER NOT FOUND !');

    // check password
    if(req.body.password !== user[0].password){
      console.log(`LOGGED IN FAILED BY USER ${
        user[0].roll_no ? 
        user[0].roll_no : 
        user[0].username
      }`);
      return res.status(404).json('WRONG PASSWORD');
    }
    //check if login failed
    if(user.errors) 
      return res.status(404).json(user);

    //login succeed 
    const payload = {
      user_id: user[0].student_id ? user[0].student_id : user[0].faculty_id,
      admin : user[0].student_id ? 0 : 1,
      role: user[0].student_id ? 'student' : 'faculty',
    };
    const jwtToken = jwt.sign(payload,'secret_key');
  
    console.log(`LOGGED IN SUCCESSFULY BY USER ${
      user[0].roll_no ? 
      user[0].roll_no : 
      user[0].username
    }`);
    res.setHeader('Authentication',jwtToken);
    res.status(200).json(jwtToken);
  }catch (error) {
    res.status(500).json(error);
  }
});

//export
module.exports = router;