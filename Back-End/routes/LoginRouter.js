const router = require('express').Router();
const {body, validationResult} = require("express-validator");
const bcrypt =require("bcrypt");

// database connection
const pool = require ("../db/dbConnection");

// used classes
const User = require ('../models/user');

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
    console.log(req.body);

    // login with id & password
    let userModel = new User();
    let user = await userModel.getOneUserByID(
      req.body.id
    );
    // check existance
    if(user.length == 0) 
      return {errors: [{msg: "USER NOT FOUND"}]};

    // check password
    // const checkpassword = await bcrypt.compare(password, user[0].password);
    if(req.body.password != user[0].password)
      return {errors: [{msg: "WRONG PASSWORD !"}]};
    

    //check if login failed
    if(user.errors) 
      return res.status(404).json(user);
    
    // res.header("token", user.token);
    res.status(200).json(user);
  }catch (err) {
    res.status(500).json({err:err});
  }
});

router.get('/test',async (req, res) => {
  try {

    if(req.body.id)
      console.log('1');
    else
      console.log('0');

      res.status(200).json('user');
  }catch (err) {
    res.status(500).json({err:err});
  }
});

//export
module.exports = router;