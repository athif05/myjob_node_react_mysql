const express = require('express');
const cors = require('cors');
const connection = require('./db/config');
const { application } = require('express');
const path = require('path');
const multer = require('multer'); //use for upload image/file
const fileupload = require("express-fileupload");
const bodyParser = require('body-parser');
const fs = require('node:fs/promises');
const fss = require("fs");
var bcrypt = require('bcryptjs'); //for encryption-decryption
var salt = bcrypt.genSaltSync(10); //use for salt


const app = express();

app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(express.static("public_html"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.send('Node is working...');
});

/* login api, start here */
app.post("/login", (req, res)=>{

	const data = req.body;
    /* console.warn(data); */

	var email=req.body.email;
	var password=req.body.password;

	var sql=`SELECT id, name, email, role_id, password from admin_users where status='1' and is_deleted='0' and email="${email}"`;

	connection.query(sql, (error, result)=>{
		if(result.length > 0){

			var db_pass=result[0].password;

			if(bcrypt.compareSync(password, db_pass)){
				res.send(result);
			} else{
				res.send([{name: "No record found"}]);
			}
			

		} else {
			res.send([{name: "No record found"}]);
		}
	});
});
/* login api, end here */


/* dashbord count job, candidate and employer, start here*/
app.get("/count-job-candidate-employer", (req, res) => {

	connection.query("SELECT count(id) as total_candidate, (select count(id) from  employer_details) as total_employer, (select count(id) from all_jobs) as total_job from candidate_details",(error, result) => {
		if(error) throw error;
			res.send(result);
	});
});
/* dashbord count job, candidate and employer, start here*/


/* show today aplied jobs api, start here */
app.get("/today-applied-jobs", (req, res)=>{

    //	let date_ob = new Date();
    let date_ob = new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '');     // delete the dot and everything after


	connection.query("SELECT job_applied_by_employees.id as id, job_applied_by_employees.user_id as user_id, job_applied_by_employees.job_id as job_id, job_applied_by_employees.status as job_status, candidate_details.name as candidate_name, candidate_details.email as candidate_email, candidate_details.mobile_number as candidate_mobile_number, all_jobs.job_title as job_title, all_jobs.ctc as ctc, cities.name as job_location_name, employer_details.company_name as company_name, job_applied_by_employees.applied_date as applied_date FROM job_applied_by_employees LEFT JOIN candidate_details on candidate_details.user_id=job_applied_by_employees.user_id LEFT JOIN all_jobs on all_jobs.id=job_applied_by_employees.job_id LEFT JOIN employer_details on employer_details.employer_id=all_jobs.employer_id LEFT JOIN cities on cities.id=all_jobs.job_location_id where job_applied_by_employees.is_deleted='0' and job_applied_by_employees.applied_date>=? and job_applied_by_employees.is_deleted=?",[date_ob,'0'], (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No job found"}]);
		}
	});
});
/* show today aplied jobs api, end here */


/* show all aplied jobs api, start here */
app.get("/applied-jobs", (req, res)=>{

	connection.query("SELECT job_applied_by_employees.id as id, job_applied_by_employees.user_id as user_id, job_applied_by_employees.job_id as job_id, job_applied_by_employees.status as job_status, candidate_details.name as candidate_name, candidate_details.email as candidate_email, candidate_details.mobile_number as candidate_mobile_number, all_jobs.job_title as job_title, all_jobs.ctc as ctc, cities.name as job_location_name, employer_details.company_name as company_name, job_applied_by_employees.applied_date as applied_date FROM job_applied_by_employees LEFT JOIN candidate_details on candidate_details.user_id=job_applied_by_employees.user_id LEFT JOIN all_jobs on all_jobs.id=job_applied_by_employees.job_id LEFT JOIN employer_details on employer_details.employer_id=all_jobs.employer_id LEFT JOIN cities on cities.id=all_jobs.job_location_id where job_applied_by_employees.is_deleted='0' and job_applied_by_employees.is_deleted=?",['0'], (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No job found"}]);
		}
	});
});
/* show all aplied jobs api, end here */


/* update applied job status api, start here */
app.get("/update-applied-jobs-status/:val/:id", (req, res) =>{

	//console.log(req.params.val+' / '+req.params.id);

	connection.query("UPDATE job_applied_by_employees set status=? where id=?",[req.params.val,req.params.id], (error, result)=>{
		if(error) throw error;
			res.send(result);
	});

});
/* update applied job status api, start here */


/* show single candidate details api, start here */
app.get("/candidate-details/:id", (req, res)=>{
	
	const final_object='';

	connection.query("SELECT cd.*, cities.name as citie_name, states.name as state_name, notice_periods.name as notice_period, work_experiences.name as work_experience_name from candidate_details as cd LEFT JOIN cities on cities.id=cd.city_id LEFT JOIN states on states.id=cd.state_id LEFT JOIN notice_periods on notice_periods.id=cd.notice_period LEFT JOIN work_experiences on work_experiences.id=cd.work_experience where cd.user_id="+req.params.id, (error, result)=>{
		if(result.length > 0){

			/* connection.query("SELECT * from candidate_work_experiences where user_id="+result[0].user_id, (error, results)=>{
				if(results.length > 0){

					//console.log(typeof results);

					//result_wrk=results;
					final_object=Object.assign(result, results);
					//final_object={...result, ...results};

				}
			});  */

			//result.push(result_wrk);

			//console.log(typeof result_wrk);
			//console.log(typeof final_object);
			//console.log(final_object);
			

			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* show single candidate details api, end here */


/* show single candidate work experience api, start here */
app.get("/candidate-work-experience/:user_id", (req, res)=>{
	
	//console.log(req.params.user_id);

	connection.query("SELECT * from candidate_work_experiences where status='1' and is_deleted='0' and user_id="+req.params.user_id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* show single candidate work experience api, end here */


/* show single candidate qualifications api, start here */
app.get("/candidate-qualifications/:user_id", (req, res)=>{
	
	//console.log(req.params.user_id);

	connection.query("SELECT * from candidate_qualifications where user_id="+req.params.user_id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* show single candidate qualifications api, end here */


/* show single job deatils api, start here */
app.get("/job-details/:id", (req, res)=>{

	connection.query("SELECT all_jobs.*, cities.name as job_location_name, states.name as state_name,  main_job_categories.name as main_job_category, job_categories.name as types_of_job_name, working_days.name as working_day_name, fee_charged_reasons.name as fee_charged_reason_name from all_jobs LEFT JOIN cities on cities.id=all_jobs.job_location_id LEFT JOIN states on states.id=all_jobs.state_id LEFT JOIN main_job_categories on main_job_categories.id=all_jobs.job_category_id LEFT JOIN job_categories on job_categories.id=all_jobs.types_of_job_id LEFT JOIN working_days on working_days.id=all_jobs.working_days LEFT JOIN fee_charged_reasons on fee_charged_reasons.id=all_jobs.candidate_fee_reasons where all_jobs.id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* show single job deatils api, end here */


/* count total no job applied by candidate api, start here */
app.get("/total-job-applied-by-candidate/:id", (req, res)=>{

	connection.query("SELECT count(id) as total_applied_job from job_applied_by_employees where job_id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* count total no job applied by candidate api, end here */


/* fetch states api, start here */
app.get("/all-states", (req, res)=>{

	connection.query("SELECT * from states where status='1' and is_deleted='0' and countries_id='101'", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch states api, end here */


/* fetch city api, start here */
app.get("/all-cities", (req, res)=>{

	connection.query("SELECT * from cities where status='1' and is_deleted='0' and country_id='101'", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch city api, end here */


/* fetch city api, start here */
app.get("/all-cities-data", (req, res)=>{

	connection.query("SELECT cities.*, states.name as state_name from cities LEFT JOIN states on states.id=cities.state_id where cities.country_id='101' order by cities.name asc", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch city api, end here */


/* add new data in city table, start here */
app.post('/add-new-city', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;
	var state_id=req.body.state_id;

	var sql = `INSERT INTO cities (name, state_id, country_id, status) VALUES ("${name}","${state_id}","101","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in city table, end here */


/* fetch qualifications api, start here */
app.get("/all-qualifications", (req, res)=>{

	connection.query("SELECT * from qualifications where status='1' and is_deleted='0'", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch qualifications api, end here */


/* fetch all candidates list api, start here */
app.get("/all-candidates", (req, res)=>{

	connection.query("SELECT candidate_details.*, candidate_details.status as status, cities.name as city_name, work_experiences.name as work_experience_name, notice_periods.name as notice_period_name from candidate_details LEFT JOIN cities on cities.id=candidate_details.city_id LEFT JOIN work_experiences on work_experiences.id=candidate_details.work_experience LEFT JOIN notice_periods on notice_periods.id=candidate_details.notice_period", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch all candidates list api, end here */


/* generic update status api, start here */
app.get("/update-generic-status/:tbl/:val/:id", (req, res) =>{

	//console.log(req.params.tbl+' / '+req.params.val+' / '+req.params.id);
	var tbl_name = req.params.tbl;

	connection.query("UPDATE "+tbl_name+" set status=? where id=?",[req.params.val,req.params.id], (error, result)=>{
		if(error) throw error;
			res.send(result);
	});

});
/* generic update status api, end here */


/* generic soft delete api, start here */
app.get("/generic-soft-delete/:tbl/:val/:id", (req, res) =>{

	//console.log(req.params.tbl+' / '+req.params.val+' / '+req.params.id);
	var tbl_name = req.params.tbl;

	connection.query("UPDATE "+tbl_name+" set is_deleted=? where id=?",[req.params.val,req.params.id], (error, result)=>{
		if(error) throw error;
			res.send(result);
	});

});
/* generic soft delete api, end here */


/* fetch all generic data list api, start here */
app.get("/all-generic-data/:tbl", (req, res)=>{

	var tbl_name = req.params.tbl;

	let sql="";

	if(tbl_name==='states'){
		sql="SELECT * from "+tbl_name+" where countries_id='101' order by name asc";
	} else if(tbl_name==='cities'){
		sql="SELECT * from "+tbl_name+" where country_id='101' order by name asc";
	} else if(tbl_name==='aboutuses'){
		sql="SELECT * from "+tbl_name+" where id='1'";
	} else if(tbl_name==='contactuses'){
		sql="SELECT * from "+tbl_name+" where id='1'";
	} else {
		sql="SELECT * from "+tbl_name+" order by name asc";
	}
	
	connection.query(sql, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch all generic data list api, end here */


/* add new data in qualifications table, start here */
app.post('/add-qualifications-data', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO qualifications (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in qualifications table, end here */


/* edit qualifications data, start here */
app.get('/edit-qualification/:id', async (req, res)=>{
	
	connection.query("SELECT * from qualifications where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit qualifications data, end here */

/* update qualifications data, start here */
app.put('/update-qualification/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE qualifications set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update qualifications data, end here */


/* fetch all employers list api, start here */
app.get("/all-employers-data", (req, res)=>{

	connection.query("SELECT employer_details.*, employer_details.status as status, cities.name as city_name, company_domains.name as domain_name from employer_details LEFT JOIN cities on cities.id=employer_details.city_id LEFT JOIN company_domains on company_domains.id=employer_details.company_domain_id", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch all employers list api, end here */

/* fetch employers details api, start here */
app.get("/employer-deatils/:id", (req, res)=>{

	connection.query("SELECT employer_details.*, company_domains.name as domain_name, cities.name as city_name, states.name as state_name from employer_details LEFT JOIN company_domains on company_domains.id=employer_details.company_domain_id LEFT JOIN cities on cities.id=employer_details.city_id LEFT JOIN states on states.id=employer_details.state_id where employer_id=?",[req.params.id], (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch employers details api, end here */


/* fetch employers posted jobs api, start here */
app.get("/employer-post-jobs/:id", (req, res)=>{

	connection.query("SELECT all_jobs.*, job_categories.name as job_types, working_days.name as working_days_name from all_jobs LEFT JOIN job_categories on job_categories.id=all_jobs.types_of_job_id LEFT JOIN working_days on working_days.id=all_jobs.working_days where all_jobs.employer_id=?",[req.params.id], (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 
});
/* fetch employers posted jobs api, end here */


/* add new data in domain table, start here */
app.post('/add-domian-data', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO company_domains (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in domain table, end here */

/* edit domain data, start here */
app.get('/edit-domain/:id', async (req, res)=>{
	
	connection.query("SELECT * from company_domains where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit domain data, end here */

/* update domain data, start here */
app.put('/update-domain/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE company_domains set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update domain data, end here */


/* update domain data, start here */
app.get('/all-jobs', async (req, res)=>{
	
	connection.query("SELECT all_jobs.*, working_days.name as working_day_name, job_categories.name as job_type_name, employer_details.company_name as company_name from all_jobs LEFT JOIN working_days on working_days.id=all_jobs.working_days LEFT JOIN job_categories on job_categories.id=all_jobs.types_of_job_id LEFT JOIN employer_details on employer_details.employer_id=all_jobs.employer_id", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	});

});
/* update domain data, end here */

/* add new data in job-categories table, start here */
app.post('/add-job-categories-data', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO job_categories (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in job-categories table, end here */

/* edit job-categories data, start here */
app.get('/edit-job-category/:id', async (req, res)=>{
	
	connection.query("SELECT * from job_categories where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit job-categories data, end here */

/* update job-categories data, start here */
app.put('/update-job-category/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE job_categories set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update job-categories data, end here */

/* add new data in job-domain table, start here */
app.post('/add-job-domain-data', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO main_job_categories (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in job-domain table, end here */

/* edit job-domain data, start here */
app.get('/edit-job-domain/:id', async (req, res)=>{
	
	connection.query("SELECT * from main_job_categories where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit job-domain data, end here */

/* update job-domain data, start here */
app.put('/update-job-domain/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE main_job_categories set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update job-domain data, end here */


/* add new data in notice_periods table, start here */
app.post('/add-notice-period-data', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO notice_periods (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in notice_periods table, end here */

/* edit notice_periods data, start here */
app.get('/edit-notice-period/:id', async (req, res)=>{
	
	connection.query("SELECT * from notice_periods where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit notice_periods data, end here */

/* update notice_periods data, start here */
app.put('/update-notice-period/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE notice_periods set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update notice_periods data, end here */


/* add new data in fee-charge-reason table, start here */
app.post('/add-fee-charge-reason', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO fee_charged_reasons (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in fee-charge-reason table, end here */

/* edit fee-charge-reason data, start here */
app.get('/edit-fee-charge-reason/:id', async (req, res)=>{
	
	connection.query("SELECT * from fee_charged_reasons where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit fee-charge-reason data, end here */

/* update fee-charge-reason data, start here */
app.put('/update-fee-charge-reason/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE fee_charged_reasons set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update fee-charge-reason data, end here */


/* add new generic data in table, start here */
app.post('/add-generic-data/:tbl', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	let sql="";

	if(req.params.tbl==='states'){
		sql = `INSERT INTO `+req.params.tbl+` (name, countries_id, status) VALUES ("${name}","101","1")`;
	} else {
		sql = `INSERT INTO `+req.params.tbl+` (name, status) VALUES ("${name}","1")`;
	}

	
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new generic data in table, end here */

/* edit generic table data, start here */
app.get('/edit-generic-table/:tbl/:id', async (req, res)=>{
	
	connection.query("SELECT * from "+req.params.tbl+" where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit generic table data, end here */


/* update generic table data, start here */
app.put('/update-generic-table/:tbl/:id', async (req, res)=>{
	
	var name=req.body.name;
	const sql = `UPDATE `+req.params.tbl+` set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update generic table data, end here */


/* update cities data, start here */
app.put('/update-city/:id', async (req, res)=>{
	
	var name=req.body.name;
	var state_id=req.body.state_id;

	const sql = `UPDATE cities set name="${name}",state_id="${state_id}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update cities data, end here */


/* show all admin accounts api, start here */
app.get("/admin-accounts", (req, res)=>{

	connection.query("SELECT admin_users.*, roles.name as role_name FROM admin_users LEFT JOIN roles on roles.id=admin_users.role_id", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No job found"}]);
		}
	});
});
/* show all admin accounts api, end here */


/* add new admin account in table, start here */
app.post('/add-admin-account', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;
	var email=req.body.email;
	var mobile=req.body.mobile;
	var password=req.body.password;
	var role_id=req.body.role_id;
	
	// hasing password
	var hash_password = bcrypt.hashSync(password, salt);

	sql = `INSERT INTO admin_users (name, email, mobile_number, password, role_id, status) VALUES ("${name}","${email}","${mobile}","${hash_password}","${role_id}","1")`;
	console.log(sql);
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new admin account in table, end here */

/* update admin account data, start here */
app.put('/update-admin-account/:id', async (req, res)=>{
	
	var name=req.body.name;
	var email=req.body.email;
	var mobile=req.body.mobile;
	var password=req.body.password;
	var role_id=req.body.role_id;

	// hasing password
	var hash_password = bcrypt.hashSync(password, salt);

	const sql = `UPDATE admin_users set name="${name}",email="${email}",mobile_number="${mobile}",password="${hash_password}",role_id="${role_id}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update admin account data, end here */

/* upload image from test page, start here */
app.post("/uploadFile", (req, res) => {

	const newpath = __dirname + "/public_html/uploads/";
	const file = req.files.file;
	const filename = file.name;

	const title=req.body.title;

	const image_path = "/public_html/uploads/"+filename;

	file.mv(`${newpath}${filename}`, (err) => {
		if (err) {
			return res.status(500).send({ message: "File upload failed", code: 200 });
		} 

		connection.query("UPDATE aboutuses set image=?, title=? where id=1",[image_path, title], (error, result)=>{
			return res.status(200).send({ message: "File Uploaded", code: 200 });
		});

	});
  });
/* upload image from test page, end here */

/* update website about us, start here */
app.post('/update-about-us', (req, res)=>{
	
	const title=req.body.title;
	var description=req.body.description;

	if(!req.files){

		let sql="UPDATE aboutuses set title=?, description=? where id=1";
		console.log(sql);
		connection.query(sql,[title, description], (error, result)=>{
			if(error) throw error;

				res.send(result);
		});
		

	} else {

		const file = req.files.file;
		let filename = file.name;
		filename = filename.split('.').join('-' + Date.now() + '.'); //add datetime with image name

		//const newpath = __dirname + "/public_html/uploads/"; // node folder path
		//const image_path = "/public_html/uploads/"+filename;  // node folder path
		/* let image_path = newpath + filename;
		image_path = image_path.replace(/\\/g, "/"); */

		const newpath = "./../react_work/public/assests/uploads/"; // react folder path
		const image_path = "/assests/uploads/"+filename;  // react folder path

		//fetch image name for unlink from folder
		connection.query("SELECT image from aboutuses where id=1", (error, result)=>{
			if(result[0]['image']!==''){
				let unlink_path = "./../react_work/public"+result[0]['image']; //image path for unlink

				if (fss.existsSync(unlink_path)) {
					// path exists
					fs.unlink(unlink_path); //unlink image
					console.log("exists:", path);
				}

				
			}
		}); 

		file.mv(`${newpath}${filename}`, (err) => {
			if (err) {
				return res.status(500).send({ message: "File upload failed", code: 200 });
			} 
	
			connection.query("UPDATE aboutuses set image=?, title=?, description=? where id=1",[image_path, title, description], (error, result)=>{
				return res.status(200).send({ message: "File Uploaded", code: 200 });
			});
	
		});
	}
	


});
/* update website about us, end here */


/* edit blog category data, start here */
app.get('/edit-blog-category/:id', async (req, res)=>{
	
	connection.query("SELECT * from blog_categories where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit blog category data, end here */

/* update blog category data, start here */
app.put('/update-blog-category/:id', async (req, res)=>{
	
	var name=req.body.name;

	const sql = `UPDATE blog_categories set name="${name}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update blog category data, end here */


/* add new data in blog category table, start here */
app.post('/add-blog-category', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;

	var sql = `INSERT INTO blog_categories (name, status) VALUES ("${name}","1")`;
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new data in blog category table, end here */

/* show all authors api, start here */
app.get("/all-authors-data", (req, res)=>{

	connection.query("SELECT authors.*, blog_categories.name as blog_name FROM authors LEFT JOIN blog_categories on blog_categories.id=authors.blog_category_id", (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	});
});
/* show all authors api, end here */

/* add new author in table, start here */
app.post('/add-author', async (req, res)=>{
    
    const data = req.body;
    var name=req.body.name;
	var email=req.body.email;
	var mobile_number=req.body.mobile_number;
	var alternate_number=req.body.alternate_number;
	var address=req.body.address;
	var blog_category_id=req.body.blog_category_id;
	
	sql = `INSERT INTO authors (name, email, mobile_number, alternate_number, address, blog_category_id, status) VALUES ("${name}","${email}","${mobile_number}","${alternate_number}","${address}","${blog_category_id}","1")`;
	console.log(sql);
  	connection.query(sql, function(error, result) {
		
		if(error) throw error;
		
		res.send(result);

		console.log("1 record inserted");

	});

});
/* add new author in table, end here */

/* update author api, start here */
app.put('/update-author/:id', async (req, res)=>{
	
	var name=req.body.name;
	var email=req.body.email;
	var mobile_number=req.body.mobile_number;
	var alternate_number=req.body.alternate_number;
	var address=req.body.address;
	var blog_category_id=req.body.blog_category_id;

	const sql = `UPDATE authors set name="${name}",email="${email}",mobile_number="${mobile_number}",alternate_number="${alternate_number}",address="${address}",blog_category_id="${blog_category_id}" where id="${req.params.id}"`;
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update author api, start here */


/* show all blogs api, start here */
app.get("/all-blogs-data", (req, res)=>{

	const sql = "SELECT blogs.*, blog_categories.name as blog_category_name, authors.name as author_name FROM blogs LEFT JOIN blog_categories on blog_categories.id=blogs.blog_category_id LEFT JOIN authors on authors.id=blogs.author_id ";
	console.log(sql);
	connection.query(sql, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	});
});
/* show all blogs api, end here */

/* add new blog in table, start here */
app.post('/add-blog', async (req, res)=>{
    
    var title=req.body.title;
	var description=req.body.description;
	var blog_category_id=req.body.blog_category_id;
	var author_id=req.body.author_id;

	const file = req.files.file;
	let filename = file.name;
	filename = filename.split('.').join('-' + Date.now() + '.'); //add datetime with image name

	const newpath = "./../react_work/public/assests/uploads/"; // react folder path
	const image_path = "/assests/uploads/"+filename;  // react folder path
 
	file.mv(`${newpath}${filename}`, (err) => {
		if (err) {
			return res.status(500).send({ message: "Blog File upload failed", code: 200 });
		}

		sql = `INSERT INTO blogs (title, description, image, author_id, blog_category_id, status) VALUES ("${title}","${description}","${image_path}","${author_id}","${blog_category_id}","1")`;
		console.log(sql);
		connection.query(sql, function(error, result) {
			
			if(error) throw error;
			
			res.send(result);

			console.log("1 record inserted");

		});


	});
	

});
/* add new blog in table, end here */

/* edit blog data, start here */
app.get('/edit-blog/:id', async (req, res)=>{
	
	connection.query("SELECT * from blogs where id="+req.params.id, (error, result)=>{
		if(result.length > 0){
			res.send(result);
		} else {
			res.send([{name: "No record found"}]);
		}
	}); 

});
/* edit blog data, end here */


/* update blog api, start here */
app.put('/update-blog/:id', async (req, res)=>{
	
	var title=req.body.title;
	var description=req.body.description;
	var blog_category_id=req.body.blog_category_id;
	var author_id=req.body.author_id;

	if(!req.files){

		const sql = `UPDATE blogs set title="${title}",description="${description}",blog_category_id="${blog_category_id}",author_id="${author_id}" where id="${req.params.id}"`;
		console.log(sql);
		connection.query(sql, (error, result)=>{
			if(error) throw error;

				res.send(result);
		});	

	} else {

		const file = req.files.file;
		let filename = file.name;
		filename = filename.split('.').join('-' + Date.now() + '.'); //add datetime with image name

		const newpath = "./../react_work/public/assests/uploads/"; // react folder path
		const image_path = "/assests/uploads/"+filename;  // react folder path

		//fetch image name for unlink from folder
		connection.query(`SELECT image from blogs where id="${req.params.id}"`, (error, result)=>{
			if(result[0]['image']!==''){
				let unlink_path = "./../react_work/public"+result[0]['image']; //image path for unlink

				if (fss.existsSync(unlink_path)) {
					// path exists
					fs.unlink(unlink_path); //unlink image
					console.log("exists:", path);
				}
			}
		});

		file.mv(`${newpath}${filename}`, (err) => {
			if (err) {
				return res.status(500).send({ message: "Blog File upload failed", code: 200 });
			}
	
			const sql = `UPDATE blogs set image="${image_path}",title="${title}",description="${description}",blog_category_id="${blog_category_id}",author_id="${author_id}" where id="${req.params.id}"`;
			console.log(sql);
			connection.query(sql, (error, result)=>{
				if(error) throw error;
		
				res.send(result);
			});
	
		});
	}

});
/* update blog api, start here */


/* update contact-us data, start here */
app.put('/update-contact-us/', async (req, res)=>{
	
	var email1=req.body.email1;
	var email2=req.body.email2;
	var contact_number1=req.body.contact_number1;
	var contact_number2=req.body.contact_number2;
	var address_line1=req.body.address_line1;
	var address_line2=req.body.address_line2;
	var google_map=req.body.google_map;

	const sql = `UPDATE contactuses set email1="${email1}",email2="${email2}",contact_number1="${contact_number1}",contact_number2="${contact_number2}",address_line1="${address_line1}",address_line2="${address_line2}",google_map="${google_map}" where id="1"`;
	
	connection.query(sql, (error, result)=>{
		if(error) throw error;

		res.send(result);
	}); 

});
/* update contact-us data, end here */


app.listen(12345);