const mysql=require('mysql'); //import mysql package.

//database configuration
const conn=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "jobportal"
});


//DB connection
conn.connect(function(error){
	if(error) throw error;

		else console.log('DB connection done');
});


module.exports = conn;
