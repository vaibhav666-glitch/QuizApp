import { useState } from "react";
import Pagination from "./pagination.jsx";

 const Quiz =({quest})=>{
    let [currentPage,setCurrentPage]=useState(1);
    let [saveAnswer,setSaveAnswer]=useState({});
    let [score,setScore]=useState(0);


    
    
    const lastItem=currentPage*5;
    const firstItem=lastItem-5;

    const itemPerPage=quest.slice(firstItem,lastItem);
    
    const handleClick = (option, index) => {
       
        setSaveAnswer((prevAnswer)=>({
            ...prevAnswer,//to copy previous state;
            [index]:option
        }));
        //console.log(saveAnswer)
      };

    return (
        <>
        <div className="">
        {
            itemPerPage.map((val)=>(
                <div key={val.id}>{val.question}

               <ul>
               {val.options.map((option) => 
                
                    <li key={`${val.id}-${option}`}>
                    <input type="radio" 
                    id={`${val.id}-${option}`}
                    name={val.id} value={option} 
                    checked={saveAnswer[val.id]===option} 
                    onChange={() => handleClick(option, val.id)}/>
                    <label htmlFor={`${val.id}-${option}`}>{option}</label>
                        
                    </li>
                    
               
                )}
                </ul> 
                </div>
                ))
        }

        <Pagination  totalItems={quest.length}
        itemsPerPage={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
        
        </div>

        </>
    )
 }
 export default Quiz;