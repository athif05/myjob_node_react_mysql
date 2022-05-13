import React, {useState, useEffect} from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {

    const [counter, setCounter] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage));

    const [pageNumberLimit, setPageNumberLimit] = useState(10);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

    useEffect(()=>{
        const value = showPerPage * counter;
        const startValue = value - showPerPage;
        onPaginationChange(startValue, value);
    },[counter]);

    const onButtonClick = (type) =>{
        if(type === "prev"){
            if(counter === 1){
                setCounter(1);
            } else {
                setCounter(counter - 1);

                if((counter - 1) % pageNumberLimit == 0){
                    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
                }
            }
        } else if(type === "next"){
            if(numberOfButtons === counter){
                setCounter(counter);
            } else {
                setCounter(counter + 1);

                if(counter + 1 > maxPageNumberLimit){
                    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
                }
                
            }
        }
    }


    return (
        <div>
            {/* <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>Previous</button> &nbsp; &nbsp;
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next</button> */}

            <button className="btn btn-primary btn-sm" onClick={() => onButtonClick('prev')}>Previous</button> &nbsp;

            { new Array(numberOfButtons).fill("").map((el, index) =>(
                
                (index+1<=maxPageNumberLimit && index+1>=minPageNumberLimit) ?
                <span className={`page-item ${index+1===counter ? "active" : null}`}>
                    <a className="page-link" onClick={()=>setCounter(index+1)}>
                        { index+1}
                    </a>
                </span>
               :<></>
            ))}
             &nbsp;
            <button className="btn btn-primary btn-sm" onClick={() => onButtonClick('next')}>Next</button>

        </div>
    );
}

export default Pagination;