const router = require('express').Router();
const {body, validationResult} = require("express-validator");

// database connection
const conn = require ("../db/dbConnection");

// used classes
const User = require ('../models/user');

router.post("/",    
    body("email")
      .isEmail()
      .withMessage("please enter a valid email !"),
    body("password")
      .isLength({min:6})
      .withMessage("password shouldn't be less than 6 characters"),
    async (req, res) => {
  try {
    const errors = validationResult(req);
    //check errors
    if (!errors.isEmpty()) 
      return res.status(400).json({errors:errors.array ()});

    // login with email & password
    let userModel = new User();
    let user = await userModel.Login(
      req.body.email, 
      req.body.password
    );

    //check if login failed
    if(user.errors) 
      return res.status(404).json(user);
    
    res.header("token", user.token);
    res.status(200).json(user);
  }catch (err) {
    res.status(500).json({err:err});
  }
});

//export
module.exports = router;