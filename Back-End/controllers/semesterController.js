const moment = require('moment');

// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class SemesterController{
    constructor(){};

    async getSemesterBy(semester){
        try{
            await dbQuery.select('semester_details');
            await dbQuery.where(semester);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'SEMESTER NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'SEMESTER ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllSemesters(){
        try{
            await dbQuery.select('semester_details');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getSemestersByYear(year){
        try{
            let results = await this.getSemesterBy(year);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getSemestersByTerm(term){
        try{
            let results = await this.getSemesterBy(term);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getSemestersByCourse(course){
        try{
            let results = await this.getSemesterBy(course);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addSemester(newSemester){
        try{
            let result = await this.getSemesterBy({
                year: newSemester.year,
                term: newSemester.term,
                course_id: newSemester.course_id,
                faculty_id: newSemester.faculty_id,
            });
            if (result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.insert('semester_details',newSemester);
                let results = await dbQuery.execute();
                results.message = 'SEMESTER ADDED SUCCESSFULLY...';
                return results;
            }
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteSemester(semester){
        try{
            let result = await this.getSemesterBy({semester_id:semester.semester_id});
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('semester_details');
                await dbQuery.where({semester_id:semester.semester_id});
                result = await dbQuery.execute();
                result.message = 'SEMESTER DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editSemester(oldSemester,newSemester){
        try{
            let result = await this.getSemesterBy({semester_id:oldSemester.semester_id});

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            let check = await this.getSemesterBy({
                year: newSemester.year,
                term: newSemester.term,
                course_id: newSemester.course_id,
                faculty_id: newSemester.faculty_id,
            });
            if (check.exist){
                check.problem = 1;
                return check;
            }

            oldSemester = result[0];

            newSemester.course_id = newSemester.course_id ? newSemester.course_id : oldSemester.course_id;
            newSemester.faculty_id = newSemester.faculty_id ? newSemester.faculty_id : oldSemester.faculty_id;
            newSemester.year = newSemester.year ? newSemester.year : oldSemester.year;
            newSemester.term = newSemester.term ? newSemester.term : oldSemester.term;

            await dbQuery.update('semester_details',newSemester);
            await dbQuery.where({semester_id:oldSemester.semester_id});
            result = await dbQuery.execute();
            result.message = 'SEMESTER UPDATED...';
            return result;
        }catch(error){
            return {error:error};
        }
    };

};