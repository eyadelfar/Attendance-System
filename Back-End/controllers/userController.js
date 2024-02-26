// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

// used classes
const User = require ('../models/user');
const Student = require("../models/student");
const Faculty = require("../models/faculty");

// let user= new User();
// let student = new Student();
// let faculty = new Faculty();

//export
module.exports = class UserController{
    constructor(){};

    async getStudentBy(column,value){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where(column,value);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'STUDENT NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                return result;
            }
        }catch(error){
            return error;
        }
    };

    async getUserByUsername(username){
        try{
            // search in students
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',username);
            let result = await dbQuery.execute();

            // search in faculty
            if(!result.length){
                await dbQuery.select('faculty_details');
                await dbQuery.where('username',username);
                result = await dbQuery.execute();
            }
            return result; 
        }catch(error){
            return error;
        }
        
    };    

    async getAllStudents(){
        try{
            await dbQuery.select('student_details');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
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
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('year',year);
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    async addStudent(newUser){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',newUser.roll_no)
            let check = await dbQuery.execute();
            if(check.length){
                check.exist = 1;
                check.message = 'STUDENT ALREADY EXIST !';
                return check;
            }
            else{
                await dbQuery.insert('student_details',newUser);
                let results = await dbQuery.execute();
                check.exist = 0;
                results.message = 'STUDENT ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteStudent(student){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',student.roll_no);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'STUDENT NOT FOUND !';
                return result;
            }
            else{
                await dbQuery.delete('student_details');
                await dbQuery.where('roll_no',student.roll_no);
                result = await dbQuery.execute();
                result.exist = 1;
                result.message = 'STUDENT DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editStudent(oldStudent,newStudent){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where('roll_no',oldStudent.roll_no);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'STUDENT NOT FOUND !';
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
                result.exist = 1;
                result.message = 'STUDENT UPDATED...';
                return result; 
            }
        }catch(error){
            return {error:error};
        }
    };

    async getAllProfessors(){
        try{
            await dbQuery.select('faculty_details');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    async addProfessor(professor){
        try{
            await dbQuery.select('faculty_details');
            await dbQuery.where('username',professor.username)
            let check = await dbQuery.execute();
            if(check.length){
                check.exist = 1;
                check.message = 'PROFESSOR ALREADY EXIST !';
                return check;
            }
            else{
                await dbQuery.insert('faculty_details',professor);
                let results = await dbQuery.execute();
                check.exist = 0;
                results.message = 'PROFESSOR ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteProfessor(professor){
        try{
            await dbQuery.select('faculty_details');
            await dbQuery.where('username',professor.username);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'PROFESSOR NOT FOUND !';
                return result;
            }
            else{
                await dbQuery.delete('faculty_details');
                await dbQuery.where('username',professor.username);
                result = await dbQuery.execute();
                result.exist = 1;
                result.message = 'PROFESSOR DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editProfessor(oldProfessor,newProfessor){
        try{
            await dbQuery.select('faculty_details');
            await dbQuery.where('username',oldProfessor.username);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'PROFESSOR NOT FOUND !';
                return result;
            }
            else{
                oldProfessor = result[0];

                newProfessor.fullname = newProfessor.fullname ? newProfessor.fullname : oldProfessor.fullname;
                newProfessor.username = newProfessor.username ? newProfessor.username : oldProfessor.username;
                newProfessor.password = newProfessor.password ? newProfessor.password : oldProfessor.password;
                // newProfessor.phone_no = newProfessor.phone_no ? newProfessor.phone_no : oldProfessor.phone_no;

                await dbQuery.update('faculty_details',newProfessor);
                await dbQuery.where('username',oldProfessor.username);
                result = await dbQuery.execute();
                result.exist = 1;
                result.message = 'PROFESSOR UPDATED...';
                return result; 
            }
        }catch(error){
            return {error:error};
        }
    };

};
