// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class LectureController{
    constructor(){};

    async getLectureBy(lecture){
        try{
            await dbQuery.select('lectures');
            await dbQuery.where(lecture);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'LECTURE NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'LECTURE ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllLectures(){
        try{
            await dbQuery.select('lectures');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    async getLectureDetailed(lecture){
        try{
            await dbQuery.joinLectureDetails(lecture.lecture_id);
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getLecturesBySemester(semester){
        try{
            await dbQuery.joinLectureDetailsBySemester(semester.semester_id);
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    // more than where condition
    async addLecture(newLecture){
        try{
            let check = await this.getLectureBy({
                course_id:   newLecture.course_id,
                lecture_date:newLecture.lecture_date,
                lecture_time:newLecture.lecture_time
            });
            if(check.exist){
                check.problem = 1;
                return check;
            }
            else{
                await dbQuery.insert('lectures',newLecture);
                let results = await dbQuery.execute();
                results.message = 'LECTURE ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
    };

    async deleteLecture(lecture){
        try{
            let result = await this.getLectureBy({lecture_id:lecture.lecture_id});
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('lectures');
                await dbQuery.where({lecture_id:lecture.lecture_id});
                result = await dbQuery.execute();
                result.message = 'LECTURE DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editLecture(oldLecture,newLecture){
        try{
            let result = await this.getLectureBy({lecture_id:oldLecture.lecture_id});

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            let check = await this.getLectureBy({
                course_id:   newLecture.course_id,
                lecture_date:newLecture.lecture_date,
                lecture_time:newLecture.lecture_time
            });
            if(check.exist){
                check.problem = 1;
                return check;
            }
            oldLecture = result[0];

            newLecture.semester_id = newLecture.semester_id ? newLecture.semester_id : oldLecture.semester_id;
            newLecture.lecture_date = newLecture.lecture_date ? newLecture.lecture_date : oldLecture.lecture_date;
            newLecture.lecture_time = newLecture.lecture_time ? newLecture.lecture_time : oldLecture.lecture_time;
            newLecture.course_id = newLecture.course_id ? newLecture.course_id : oldLecture.course_id;

            await dbQuery.update('lectures',newLecture);
            await dbQuery.where({lecture_id:oldLecture.lecture_id});
            result = await dbQuery.execute();
            result.message = 'LECTURE UPDATED...';
            return result; 
        
        }catch(error){
            return {error:error};
        }
    };

};
