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
    };

    async getAllStudents(){
        await dbQuery.select('student_details');
        let results = await dbQuery.execute();
        return results; 
    };

    /*
    async getFilteredStudents(filter,value){
        await dbQuery.select('student_details');
        await dbQuery.where(filter,value);
        let results = await dbQuery.execute();
        return results; 
    };
    */
    async getStudentsByYear(year){
        await dbQuery.select('student_details');
        await dbQuery.where('year',year);
        let results = await dbQuery.execute();
        return results; 
    }

    async addStudent(newUser){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',newUser.roll_no)
            let check = await dbQuery.execute();
            if(check.length){
                check.exist = 0;
                check.message = 'USER ALREADY EXIST !';
                return check;
            }
            else{
                await dbQuery.insert('student_details',newUser);
                let results = await dbQuery.execute();
                results.message = 'USER ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    }

    async deleteStudent(){
        await dbQuery.delete('student_details');
        await dbQuery.where(filter,value);
        let results = await dbQuery.execute();
        return results.affectedRows; 
    }

    async editStudent(oldStudent,newStudent){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',oldStudent.roll_no);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'USER NOT FOUND !';
                return result;
            }
            else{
                oldStudent = result[0];

                newStudent.name = newStudent.name ? newStudent.name : oldStudent.name;
                newStudent.roll_no = newStudent.roll_no ? newStudent.roll_no : oldStudent.roll_no;
                // newStudent.password = newStudent.password ? newStudent.password : oldStudent.password;
                newStudent.phone_no = newStudent.phone_no ? newStudent.phone_no : oldStudent.phone_no;

                await dbQuery.update('student_details',newStudent);
                await dbQuery.where('roll_no',oldStudent.roll_no);
                result = await dbQuery.execute();
                result.message = 'USER UPDATED...';

                return result; 
            }

        }catch(error){
            return {error:error};
        }
    }
};
