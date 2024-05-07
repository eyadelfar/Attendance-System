// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class UserController{
    constructor(){};

    async getUserByUsername(username){
        try{
            // search in students
            await dbQuery.select('student_details');
            await dbQuery.where({roll_no:username});
            let result = await dbQuery.execute();

            // search in faculty
            if(!result.length){
                await dbQuery.select('faculty_details');
                await dbQuery.where({username:username});
                result = await dbQuery.execute();
            }
            return result; 
        }catch(error){
            return error;
        }
        
    };

/* students */
    async getStudentsBy(student){
        try{
            await dbQuery.select('student_details');
            await dbQuery.where(student);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'STUDENT NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'STUDENT ALREADY EXIST !';
                return result;
            }
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
    async getStudentsByLevel(level){
        try{
            let results = await this.getStudentsBy({level:level})
            return results; 
        }catch(error){
            return error;
        }
    };
*/
    async addStudent(newStudent){
        try{
            let check = await this.getStudentsBy({roll_no:newStudent.roll_no});
            if(check.length){
                check.problem = 1;
                return check;
            }
            else{
                await dbQuery.insert('student_details',newStudent);
                let results = await dbQuery.execute();
                results.message = 'STUDENT ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteStudent(student){
        try{
            let result = await this.getStudentsBy({student_id:student.student_id});
            console.log(result);

            if(!result.length){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('student_details');
                await dbQuery.where({student_id:student.student_id});
                result = await dbQuery.execute();
                result.message = 'STUDENT DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editStudent(oldStudent,newStudent){
        try{
            let result = await this.getStudentsBy({
                student_id:oldStudent.student_id
            });
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            oldStudent = result[0];

            if(newStudent.roll_no && newStudent.roll_no !== oldStudent.roll_no){
                let check = await this.getStudentsBy({
                    roll_no:newStudent.roll_no
                });                
                if(check.length){
                    check.problem = 1;
                    return check;
                }
            }
            newStudent.fullname = newStudent.fullname ? newStudent.fullname : oldStudent.fullname;
            newStudent.roll_no = newStudent.roll_no ? newStudent.roll_no : oldStudent.roll_no;
            newStudent.password = newStudent.password ? newStudent.password : oldStudent.password;
            newStudent.phone_no = newStudent.phone_no ? newStudent.phone_no : oldStudent.phone_no;
            newStudent.level = newStudent.level ? newStudent.level : oldStudent.level;

            await dbQuery.update('student_details',newStudent);
            await dbQuery.where({
                student_id:oldStudent.student_id
            });
            result = await dbQuery.execute();
            result.message = 'STUDENT UPDATED...';
            return result; 
            
        }catch(error){
            return {error:error};
        }
    };

/* professors */    
    async getProfessorBy(professor){
        try{
            await dbQuery.select('faculty_details');
            await dbQuery.where(professor);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'PROFESSOR NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'PROFESSOR ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
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
            let check = await this.getProfessorBy({username:professor.username});
            if(check.length){
                check.problem = 1;
                return check;
            }
            else{
                await dbQuery.insert('faculty_details',professor);
                let results = await dbQuery.execute();
                results.message = 'PROFESSOR ADDED SUCCESSFULLY';
                return results;
            }
        }catch(error){
            return {error:error};
        }
    };

    async deleteProfessor(professor){
        try{
            let result = await this.getProfessorBy({faculty_id:professor.faculty_id});
            console.log(result);

            if(!result.length){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('faculty_details');
                await dbQuery.where({faculty_id:professor.faculty_id});
                result = await dbQuery.execute();
                result.message = 'PROFESSOR DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editProfessor(oldProfessor,newProfessor){
        try{
            let result = await this.getProfessorBy({faculty_id:oldProfessor.faculty_id});            
            if(!result.length){
                result.problem = 1;
                return result;
            }
            oldProfessor = result[0];

            if(newProfessor.username && newProfessor.username !== oldProfessor.username){
                let result = await this.getProfessorBy({username:newProfessor.username});
                if(result.length){
                    result.problem = 1;
                    return result;
                }
            }

            newProfessor.fullname = newProfessor.fullname ? newProfessor.fullname : oldProfessor.fullname;
            newProfessor.username = newProfessor.username ? newProfessor.username : oldProfessor.username;
            newProfessor.password = newProfessor.password ? newProfessor.password : oldProfessor.password;

            await dbQuery.update('faculty_details',newProfessor);
            await dbQuery.where({faculty_id:oldProfessor.faculty_id});
            result = await dbQuery.execute();
            result.message = 'PROFESSOR UPDATED...';
            return result;
            
        }catch(error){
            return {error:error};
        }
    };

};