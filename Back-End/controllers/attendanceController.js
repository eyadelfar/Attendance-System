const moment = require('moment');

// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class AttendanceController{
    constructor(){};

    async getAttendanceBy(attendance){
        try{
            await dbQuery.select('attendance');
            await dbQuery.where(attendance);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'ATTENDANCE NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'ATTENDANCE ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllAttendances(){
        try{
            await dbQuery.select('attendance');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };

    async getAttendancesByCourse(course_id){
        try{
            let results = await this.getAttendanceBy(course_id);
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getAttendancesBySemester(semester_id){
        try{
            let results = await this.getAttendanceBy(semester_id);
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getAttendancesByStudent(student_id){
        try{
            let results = await this.getAttendanceBy(student_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getAttendancesByStudent(lecture_id){
        try{
            let results = await this.getAttendanceBy(lecture_id);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addAttendance(newAttendance){
        try{
            let check = await this.getAttendanceBy({
                course_id:newAttendance.course_id,
                semester_id:newAttendance.semester_id,
                student_id:newAttendance.student_id,
                lecture_id:newAttendance.lecture_id,
            });
            if(check.exist){
                check.problem = 1;
                return check;
            }
            newAttendance.timestamp = moment().toISOString().slice(0,19).replace('T',' ');
            await dbQuery.insert('attendance',newAttendance);
            let results = await dbQuery.execute();
            results.message = 'ATTENDANCE ADDED SUCCESSFULLY...';
            return results;
            
        }catch(error){
            return {error:error};
        }
    };

    async deleteAttendance(attendance){
        try{
            let result = await this.getAttendanceBy({attendance_id:attendance.attendance_id});
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('attendance');
                await dbQuery.where({attendance_id:attendance.attendance_id});
                result = await dbQuery.execute();
                result.message = 'ATTENDANCE DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editAttendance(oldAttendance,newAttendance){
        try{
            let result = await this.getAttendanceBy({attendance_id:oldAttendance.attendance_id});

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            oldAttendance = result[0];

            newAttendance.timestamp = 
                newAttendance.timestamp ? 
                newAttendance.timestamp : 
                moment(oldAttendance.timestamp).format('YYYY-MM-DD HH:mm:ss');
            newAttendance.course_id = newAttendance.course_id ? newAttendance.course_id : oldAttendance.course_id;
            newAttendance.semester_id = newAttendance.semester_id ? newAttendance.semester_id : oldAttendance.semester_id;
            newAttendance.student_id = newAttendance.student_id ? newAttendance.student_id : oldAttendance.student_id;
            newAttendance.status = newAttendance.status ? newAttendance.status : oldAttendance.status;
            newAttendance.lecture_id = newAttendance.lecture_id ? newAttendance.lecture_id : oldAttendance.lecture_id;

            await dbQuery.update('attendance',newAttendance);
            await dbQuery.where({attendance_id:oldAttendance.attendance_id});
            result = await dbQuery.execute();
            result.message = 'ATTENDANCE UPDATED...';
            return result; 
        
        }catch(error){
            return {error:error};
        }
    };

};
