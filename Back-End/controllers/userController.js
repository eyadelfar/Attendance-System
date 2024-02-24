// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

// used classes
const User = require ('../models/user');
let user= new User();

//export
module.exports = class UserController{
    constructor(){};

    async getOneUserByUsername(username){
        // search in students
        await dbQuery.select('student_details');
        await dbQuery.where('roll_no',username);
        let results = await dbQuery.execute();

        // search in faculty
        if(!results.length){
            await dbQuery.select('faculty_details');
            await dbQuery.where('username',username);
            results = await dbQuery.execute();
        }

        return results; 
    }
};
