const express = require('express');
const cors = require('cors');
const connection = require('./db/config');
const { application } = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Node is working...');
});


/* login api, start here */
app.post("/login", (req, res)=>{

	const data = req.body;
    console.warn(data);

	var email=req.body.email;
	var password=req.body.password;

	connection.query("SELECT id, name, email, role_id from admin_users where email=? and password=?",[email, password], (error, result)=>{
		if(result.length > 0){
			res.send(result);
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

    //	let date_ob = new Date();

    let date_ob = new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '');     // delete the dot and everything after


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

	console.log(req.params.val+' / '+req.params.id);

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
	
	console.log(req.params.user_id);

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
	
	console.log(req.params.user_id);

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


app.listen(12345);