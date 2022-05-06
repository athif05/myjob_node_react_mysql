/* update status, start here */
const updateStatus = useCallback(async (tbl, val, id) => {
    let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
}, getAllQualifications());
/* update status, end here */


/* soft delete, start here */
const softDelete = useCallback( async (tbl, val, id) => {
    let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
    result_soft_delete = await result_soft_delete.json();
    console.log(result_soft_delete);
}, getAllQualifications());
/* soft delete, end here */