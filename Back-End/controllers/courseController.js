// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

// used classes
const Course = require("../models/course");

//export
module.exports = class CourseController{
    constructor(){};

    async getCourseBy(column,value){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where(column,value);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'COURSE NOT FOUND !';
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

    async getAllCourses(){
        try{
            await dbQuery.select('course_details');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getCoursesByProfessor(profesor){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where('faculty_id',profesor.profesor_id);
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    async addCourse(newCourse){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where('course_id',newCourse.course_id);
            let check = await dbQuery.execute();
            if(check.length){
                check.exist = 1;
                check.message = 'COURSE ALREADY EXIST !';
                return check;
            }
            else{
                await dbQuery.insert('course_details',newCourse);
                let results = await dbQuery.execute();
                check.exist = 0;
                results.message = 'COURSE ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteCourse(course){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where('course_id',course.course_id);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'COURSE NOT FOUND !';
                return result;
            }
            else{
                await dbQuery.delete('course_details');
                await dbQuery.where('course_id',course.course_id);
                result = await dbQuery.execute();
                result.exist = 1;
                result.message = 'COURSE DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editCourse(oldCourse,newCourse){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where('course_id',oldCourse.course_id);
            let result = await dbQuery.execute();
            console.log(result);

            if(!result.length){
                result.exist = 0;
                result.message = 'COURSE NOT FOUND !';
                return result;
            }
            else{
                oldCourse = result[0];

                newCourse.code = newCourse.code ? newCourse.code : oldCourse.code;
                newCourse.title = newCourse.title ? newCourse.title : oldCourse.title;
                newCourse.credit = newCourse.credit ? newCourse.credit : oldCourse.credit;

                await dbQuery.update('course_details',newCourse);
                await dbQuery.where('course_id',oldCourse.course_id);
                result = await dbQuery.execute();
                result.exist = 1;
                result.message = 'COURSE UPDATED...';
                return result; 
            }
        }catch(error){
            return {error:error};
        }
    };

};
