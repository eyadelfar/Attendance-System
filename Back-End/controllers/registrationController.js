// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class RegistrationController{
    constructor(){};

    async getRegistrationBy(column,value){
        try{
            await dbQuery.select('course_registration');
            await dbQuery.where(column,value);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'REGISTRATION NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'REGISTRATION ALREADY EXIST';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllRegistrations(){
        try{
            await dbQuery.select('course_registration');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getRegistrationsByStudent(student){
        try{
            let results = await this.getRegistrationBy('student_id',student.student_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getRegistrationsByCourse(course){
        try{
            let results = await this.getRegistrationBy('course_id',course.course_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addRegistration(newRegistration){
        try{
            let result = await this.getRegistrationBy('registration_id',newRegistration.registration_id);
            if(result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.insert('course_registration',newRegistration);
                let result = await dbQuery.execute();
                result.message = 'REGISTRATION ADDED SUCCESSFULLY...';
                return result;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteRegistration(registration){
        try{
            let result = await this.getRegistrationBy('registration_id',registration.registration_id);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('course_registration');
                await dbQuery.where('registration_id',registration.registration_id);
                result = await dbQuery.execute();
                result.message = 'REGISTRATION DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editRegistration(oldRegistration,newRegistration){
        try{
            let result = await this.getRegistrationBy('registration_id',oldRegistration.registration_id);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
                           
            oldRegistration = result[0];

            newRegistration.course_id = newRegistration.course_id ? newRegistration.course_id : oldRegistration.course_id;
            newRegistration.student_id = newRegistration.student_id ? newRegistration.student_id : oldRegistration.student_id;

            await dbQuery.update('course_registration',newRegistration);
            await dbQuery.where('registration_id',oldRegistration.registration_id);
            result = await dbQuery.execute();
            result.message = 'REGISTRATION UPDATED...';
            return result; 
            
        }catch(error){
            return {error:error};
        }
    };

};
