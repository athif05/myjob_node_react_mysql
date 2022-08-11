import React, { useState, useEffect} from "react";

const Pagination = ({showPerPage, onPaginationChange, total}) =>{

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
            
            <nav>
                <ul className="page-numbers d-inline-flex">

                    <button className="btn btn-primary btn-sm" onClick={() => onButtonClick('prev')}>Previous</button> &nbsp;

                        { new Array(numberOfButtons).fill("").map((el, index) =>(
                            
                            (index+1<=maxPageNumberLimit && index+1>=minPageNumberLimit) ?
                            
                            <li>
                                <a className={`page-number ${index+1===counter ? "active" : null}`} onClick={()=>setCounter(index+1)}>
                                { index+1}
                                </a>
                            </li>
                        :<></>
                        ))}

                        &nbsp;
                    <button className="btn btn-primary btn-sm" onClick={() => onButtonClick('next')}>Next</button>

                </ul>
            </nav>

        </div>
    );

}

export default Pagination;