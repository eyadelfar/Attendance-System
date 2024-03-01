const moment = require('moment');
// moment.utc();

// database connection
const DBQuery = require ("../db/dbQuery");
let dbQuery = new DBQuery();

//export class
module.exports = class SessionController{
    constructor(){};

    async getSessionBy(column,value){
        try{
            await dbQuery.select('session_details');
            await dbQuery.where(column,value);
            let result = await dbQuery.execute();

            if(!result.length){
                result.exist = 0;
                result.message = 'SESSION NOT FOUND !';
                return result;
            }
            else{
                result.exist = 1;
                result.message = 'SESSION ALREADY EXIST !';
                return result;
            }
        }catch(error){
            return error;
        }
    };   

    async getAllSessions(){
        try{
            await dbQuery.select('session_details');
            let results = await dbQuery.execute();
            return results; 
        }catch(error){
            return error;
        }
    };
    
    async getSessionsByYear(year){
        try{
            let results = await this.getSessionBy('year',year);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getSessionsByTerm(term){
        try{
            let results = await this.getSessionBy('term',term);
            return results; 
        }catch(error){
            return error;
        }
    };

    async getSessionsByCourse(course){
        try{
            let results = await this.getSessionBy('course',course);
            return results; 
        }catch(error){
            return error;
        }
    };

    async addSession(newSession){
        try{
            await dbQuery.insert('session_details',newSession);
            let results = await dbQuery.execute();
            results.message = 'SESSION ADDED SUCCESSFULLY...';
            return results;
            
        }catch(error){
            return {error:error};
        }
        
    };

    async deleteSession(session){
        try{
            let result = await this.getSessionBy('session_id',session.session_id);
            if(!result.exist){
                result.problem = 1;
                return result;
            }
            else{
                await dbQuery.delete('session_details');
                await dbQuery.where('session_id',session.session_id);
                result = await dbQuery.execute();
                result.message = 'SESSION DELETED...';
                return result; 
            }
        }catch(error){
            return error;
        }
    };

    async editSession(oldSession,newSession){
        try{
            let result = await this.getSessionBy('session_id',oldSession.session_id);

            if(!result.exist){
                result.problem = 1;
                return result;
            }
            oldSession = result[0];

            newSession.session_time = 
                newSession.session_time ? 
                newSession.session_time : 
                moment(oldSession.session_time).format('YYYY-MM-DD HH:mm:ss');
            newSession.course_id = newSession.course_id ? newSession.course_id : oldSession.course_id;
            newSession.year = newSession.year ? newSession.year : oldSession.year;
            newSession.term = newSession.term ? newSession.term : oldSession.term;

            await dbQuery.update('session_details',newSession);
            await dbQuery.where('session_id',oldSession.session_id);
            result = await dbQuery.execute();
            result.message = 'SESSION UPDATED...';
            return result; 
        
        }catch(error){
            return {error:error};
        }
    };

};
