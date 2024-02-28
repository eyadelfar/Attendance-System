const router = require('express').Router();
const {body, validationResult} = require("express-validator");
const bcrypt =require("bcrypt");

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
    // const checkpassword = await bcrypt.compare(password, user[0].password);
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
    
    console.log(`LOGGED IN SUCCESSFULY BY USER ${
      user[0].roll_no ? 
      user[0].roll_no : 
      user[0].username
    }`);
    // res.header("token", user.token);
    res.status(200).json(user);
  }catch (error) {
    res.status(500).json({error:error});
  }
});

//export
module.exports = router;