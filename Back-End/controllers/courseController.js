// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class CourseController{
    constructor(){};

    async getCourseBy(course){
        try{
            await dbQuery.select('course_details');
            await dbQuery.where(course);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'COURSE NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'COURSE ALREADY EXIST !';
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

    async addCourse(newCourse){
        try{
            let check = await this.getCourseBy({code:newCourse.code});
            if(check.exist){
                check.problem = 1;
                return check;
            }
            else{
                await dbQuery.insert('course_details',newCourse);
                let results = await dbQuery.execute();
                results.message = 'COURSE ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteCourse(course){
        try{
            let result = await this.getCourseBy({course_id:course.course_id});
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('course_details');
                await dbQuery.where({course_id:course.course_id});
                result = await dbQuery.execute();
                result.message = 'COURSE DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editCourse(oldCourse,newCourse){
        try{
            let result = await this.getCourseBy({course_id:oldCourse.course_id});

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            oldCourse = result[0];

            if(newCourse.code && newCourse.code !== oldCourse.code){
                let result = await this.getCourseBy({code:newCourse.code});
                if(result.exist){
                    result.problem = 1;
                    return result;
                }
            }
            newCourse.code = newCourse.code ? newCourse.code : oldCourse.code;
            newCourse.title = newCourse.title ? newCourse.title : oldCourse.title;
            newCourse.credit = newCourse.credit ? newCourse.credit : oldCourse.credit;

            await dbQuery.update('course_details',newCourse);
            await dbQuery.where({course_id:oldCourse.course_id});
            result = await dbQuery.execute();
            result.message = 'COURSE UPDATED...';
            return result; 
        
        }catch(error){
            return {error:error};
        }
    };

};
