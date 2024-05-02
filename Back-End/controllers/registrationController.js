// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class RegistrationController{
    constructor(){};

    async getRegistrationBy(registration){
        try{
            await dbQuery.select('course_registration');
            // if(!registration.student_id)
            await dbQuery.where(registration);
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
    
    async getRegistrationsByStudent(student_id){
        try{
            let results = await this.getRegistrationBy(student_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getRegistrationsByCourse(course_id){
        try{
            let results = await this.getRegistrationBy(course_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addRegistration(newRegistration){
        try{
            let check = await this.getRegistrationBy(newRegistration);
            if(check.exist){
                check.problem = 1;
                return check;
            }
            await dbQuery.insert('course_registration',newRegistration);
            let result = await dbQuery.execute();
            result.message = 'REGISTRATION ADDED SUCCESSFULLY...';
            return result;
            
        }catch(error){
            return {error:error};
        }
    };

    async importRegistrations(data){
        try{
            let result;
            const headers = data[0];
            for (let i = 1; i < data.length; i++) {
                const row = data[i];
                let rowData = {};

                for (let j = 0; j < headers.length; j++) {
                    rowData[headers[j]] = row[j];
                }
                
                await dbQuery.insert('course_registration', rowData);
                result = await dbQuery.execute();
            }
            result.message = 'Data uploaded successfully';
            return result;
        }catch(error){
            return {error:error};
        }
    };
    
    async deleteRegistration(registration){
        try{
            let result = await this.getRegistrationBy(registration);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('course_registration');
                await dbQuery.where(registration);
                result = await dbQuery.execute();
                result.message = 'REGISTRATION DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };
/*
    async editRegistration(oldRegistration,newRegistration){
        try{
            let result = await this.getRegistrationBy(oldRegistration);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            
            newRegistration.course_id = newRegistration.course_id ? newRegistration.course_id : oldRegistration.course_id;
            newRegistration.student_id = newRegistration.student_id ? newRegistration.student_id : oldRegistration.student_id;

            await dbQuery.update('course_registration',newRegistration);
            await dbQuery.where(oldRegistration);
            result = await dbQuery.execute();
            result.message = 'REGISTRATION UPDATED...';
            return result; 
            
        }catch(error){
            return {error:error};
        }
    };
*/
};
