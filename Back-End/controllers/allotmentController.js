const moment = require('moment');

// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class AllotmentController{
    constructor(){};

    async getAllotmentBy(column,value){
        try{
            await dbQuery.select('course_allotment');
            await dbQuery.where({column:value});
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'ALLOTMENT NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'ALLOTMENT ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllAllotments(){
        try{
            await dbQuery.select('course_allotment');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    async getAllotmentsByCourse(course){
        try{
            let results = await this.getAllotmentBy('course',course);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addAllotment(newAllotment){
        try{
            await dbQuery.insert('course_allotment',newAllotment);
            let results = await dbQuery.execute();
            results.message = 'ALLOTMENT ADDED SUCCESSFULLY...';
            return results;
            
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteAllotment(allotment){
        try{
            let result = await this.getAllotmentBy('allotment_id',allotment.allotment_id);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('course_allotment');
                await dbQuery.where({allotment_id:allotment.allotment_id});
                result = await dbQuery.execute();
                result.message = 'ALLOTMENT DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editAllotment(oldAllotment,newAllotment){
        try{
            let result = await this.getAllotmentBy('allotment_id',oldAllotment.allotment_id);

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            oldAllotment = result[0];

            newAllotment.allotment_date = 
                newAllotment.allotment_date ? 
                newAllotment.allotment_date : 
                moment(oldAllotment.allotment_date).format('YYYY-MM-DD');
            newAllotment.faculty_id = newAllotment.faculty_id ? newAllotment.faculty_id : oldAllotment.faculty_id;
            newAllotment.course_id = newAllotment.course_id ? newAllotment.course_id : oldAllotment.course_id;
            newAllotment.semester_id = newAllotment.semester_id ? newAllotment.semester_id : oldAllotment.semester_id;

            await dbQuery.update('course_allotment',newAllotment);
            await dbQuery.where({allotment_id:oldAllotment.allotment_id});
            result = await dbQuery.execute();
            result.message = 'ALLOTMENT UPDATED...';
            return result; 
        
        }catch(error){
            return {error:error};
        }
    };

};
