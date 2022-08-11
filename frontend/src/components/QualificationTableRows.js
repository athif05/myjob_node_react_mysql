function QualificationTableRows({rowsDataQual, deleteTableRowsQual, handleChange}) {

    const WorkExpTd={
        height: "30px",
        fontSize: "14px",
        lineHeight: "18px"
    }

    return(
        
        rowsDataQual.map((data, index)=>{
            const {courseName, college, year, marks}= data;
            return(
            <>
                <tr key={index}>
                <td><input type="text" name="addmore_qualification[]" placeholder="Enter your qualification" className="form-control" style={WorkExpTd} value={courseName} onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                <td><input type="text" name="addmore_college_university[]" placeholder="Enter your college/university" className="form-control" style={WorkExpTd} value={college} onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                <td><input type="text" name="addmore_year[]" placeholder="Enter your year" className="form-control" style={WorkExpTd} value={year} onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                <td><input type="text" name="addmore_marks[]" placeholder="Enter your marks" className="form-control" style={WorkExpTd} value={marks} onChange={(evnt)=>(handleChange(index, evnt))}/></td>  
                <td>
                        <button type="button" className="btn btn-danger" onClick={()=>(deleteTableRowsQual(index))} style={WorkExpTd}>Remove</button>
                    </td>  
                </tr>
            </>
            )
        })
   
    )
    
}

export default QualificationTableRows;