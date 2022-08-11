function WorkExperienceTableRows({rowsData, deleteTableRows, handleChange}) {

    const WorkExpTd={
        height: "30px",
        fontSize: "14px",
        lineHeight: "18px"
    }

    return(
        
        rowsData.map((data, index)=>{
            //const {designation, companyName, dateFrom, dateTo, describeRole}= data;
            return(
            <>
                <tr key={index}>
                    <td><input type="text" name="addmore_designation[]" placeholder="Enter your designation" className="form-control" style={WorkExpTd}  onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                    <td><input type="text" name="addmore_company_name[]" placeholder="Enter your company name" className="form-control" style={WorkExpTd}  onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                    <td><input type="date" name="addmore_from[]" placeholder="Enter from" className="form-control" style={WorkExpTd}  onChange={(evnt)=>(handleChange(index, evnt))}/></td> 
                    <td><input type="date" name="addmore_to[]" placeholder="Enter to" className="form-control" style={WorkExpTd}  onChange={(evnt)=>(handleChange(index, evnt))}/></td> 
                    <td><input type="text" name="addmore_describe_role[]" placeholder="Describe Role" className="form-control" style={WorkExpTd}  onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                    <td>
                        <button type="button" className="btn btn-danger" onClick={()=>(deleteTableRows(index))} style={WorkExpTd}>Remove</button>
                    </td>  
                </tr>
            </>
            )
        })
   
    )
    
}

export default WorkExperienceTableRows;