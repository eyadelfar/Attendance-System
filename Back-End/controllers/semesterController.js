const moment = require('moment');

// database connection
const DBQuery = require ("../db/dbQuery");
const connect = require ("../db/dbConnection");
const CourseController = require('./courseController');
const ProfessorController = require('./userController');

// controllers
let courseController = new CourseController();
let professorController = new ProfessorController();
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

    async getAllCourseDetails(){
        try{
            await dbQuery.joinAllCourseDetails();
            let result = await dbQuery.execute();
            return result;
        }catch(error){
            return error;
        }
    };

    async getCourseDetails(semester){
        try{
            await dbQuery.joinCourseDetails(semester.semester_id);
            let result = await dbQuery.execute();
            return result;
        }catch(error){
            return error;
        }
    };

    async getAllRegisteredCourses(){
        try{
            await dbQuery.joinAllRegisteredCourses();
            let result = await dbQuery.execute();
            return result;
        }catch(error){
            return error;
        }
    };

    async getRegisteredCourses(student){
        try{
            await dbQuery.joinRegisteredCourses(student.student_id);
            let result = await dbQuery.execute();
            return result;
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
            let result = await this.getSemesterBy({
                semester_id:semester.semester_id
            });
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                semester = result[0];
                await dbQuery.delete('semester_details');
                await dbQuery.where({
                    semester_id:semester.semester_id
                });
                result = await dbQuery.execute();
                result.message = 'SEMESTER DELETED...';

                await dbQuery.select('course_details');
                await dbQuery.where({
                    course_id: semester.course_id
                });
                let course = await dbQuery.execute();
                if(course.length === 1){
                    await dbQuery.delete('course_details');
                    await dbQuery.where({
                        course_id: semester.course_id
                    });
                    await dbQuery.execute();
                }
                
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editSemester(semesterOld,semesterNew){
        try{
        //check if semester exist
            let check = await this.getCourseDetails({
                semester_id: semesterOld.semester_id
            });

            if(check.length === 0){
                check.problem = 1;
                check.message = 'SEMESTER NOT FOUND';
                return check;
            }
            semesterOld = check[0];

        // check if new semester exist
            /*check = await this.getSemesterBy({
                year: semesterNew.year,
                term: semesterNew.term,
                course_code: semesterOld.code,
                faculty_id: semesterNew.faculty_id,
            });
            if (check.exist){
                check.problem = 1;
                return check;
            }
        */
        //check if new professor exist
            if(semesterNew.faculty_id){
                let check = await professorController.getProfessorBy({
                    faculty_id: semesterNew.faculty_id
                });
                if(!check.exist){
                    check.problem = 1;
                    return check;
                }
            }

            console.log(semesterNew);
        //check if new course exist
            if(semesterNew.course_code){
                let courseOld = await courseController.getCourseBy({
                    course_id: semesterOld.course_id,
                });

                let courseCheck = await courseController.getCourseBy({
                    code: semesterNew.course_code,
                });
                
                if(courseCheck.exist && courseOld[0].code != courseCheck[0].code){
                    courseCheck.problem = 1;
                    courseCheck.message = 'COURSE CODE ALREADY EXIST';
                    return courseCheck;
                }

                let courseNew = {
                    code : semesterNew.course_code,
                    title: semesterNew.course_title ? semesterNew.course_title : courseOld[0].title,
                }
                
                let result = await courseController.editCourse(courseOld[0],courseNew);
                if(result.problem)
                    return result;

                // semesterNew.course_id = courseOld[0].course_id;
            }

            let updatedSemester = {
                year:       semesterNew.year       ? semesterNew.year       : semesterOld.year,
                term:       semesterNew.term       ? semesterNew.term       : semesterOld.term,
                // course_id:  semesterNew.course_id  ? semesterNew.course_id  : semesterOld.course_id,
                faculty_id: semesterNew.faculty_id ? semesterNew.faculty_id : semesterOld.faculty_id
            }

            await dbQuery.update('semester_details',updatedSemester);
            await dbQuery.where({
                semester_id: semesterOld.semester_id
            });
            let result = await dbQuery.execute();
            result.message = 'SEMESTER UPDATED...';
            return result;
        }catch(error){
            return {error:error};
        }
    };

};
