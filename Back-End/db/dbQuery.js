// database connection
const connect = require ("./dbConnection");

let query = '';

module.exports = class DBQuery{

    constructor(){
        this.query = null;
    };

    async select(tableName, ...columns) {
        let columnNames = columns.length > 0 ? columns.join(', ') : '*';
        this.query = `SELECT ${columnNames} FROM ${tableName}`;
        return this;
    }

    async insert(tableName, columns = {}) {
        let columnNames = Object.keys(columns).join(', ');
        let columnValues = Object.values(columns).join("', '");
        let updates = Object.keys(columns).map(column => `${column} = VALUES(${column})`).join(', ');

        this.query = `INSERT INTO ${tableName} (${columnNames}) VALUES ('${columnValues}') ON DUPLICATE KEY UPDATE ${updates}`;
        return this;
    }

    async update(tableName, columns = {}) {
        let updates = [];
        for (let column in columns) {
            updates.push(`${column} = '${columns[column]}'`);
        }
        this.query = `UPDATE ${tableName} SET ${updates.join(', ')}`;
        return this;
    }

    async delete(tableName) {
        this.query = `DELETE FROM ${tableName}`;
        return this;
    }

    async where(column,value){
        this.query += ` WHERE ${column} = '${value}'`;
        return this;
    }

    async orderBy(column, ordering = ''){
        this.query += ` ORDER BY ${column} ${ordering}`;       
        return this;
    }

    async execute(){
        return new Promise((resolve, reject) => {
            if (!this.query){
                reject(new Error('No query specified'));
            }
            connect.query(this.query,
                (errors, results, fields)=>{
                    if(errors)
                        reject (errors) ;
                    else 
                        resolve (results);
                }
            );
        });    
    }
};