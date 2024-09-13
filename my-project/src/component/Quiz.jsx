import { useEffect, useState } from "react";
import Pagination from "./pagination.jsx";

 const Quiz =({quest})=>{
    let [currentPage,setCurrentPage]=useState(1);
    let [saveAnswer,setSaveAnswer]=useState({});
    let [score,setScore]=useState(0);
    let [showScore,setShowScore]=useState(false);
    
    
    
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
         <h1 className="text-3xl font-bold text-center mb-8">Online Quiz</h1>
       {!showScore ?(
        <div className="space-y-6">
        {itemPerPage.map((val) => (
    <div key={val.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">{val.question}</h3>
      <ul className="space-y-2">
        {val.options.map((option) => (
          <li key={`${val.id}-${option}`} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`${val.id}-${option}`}
              name={val.id}
              value={option}
              checked={saveAnswer[val.id] === option}
              onChange={() => handleClick(option, val.id)}
              className="form-radio h-4 w-4 text-blue-600 transition duration-200 ease-in-out"
            />
            <label
              htmlFor={`${val.id}-${option}`}
              className="text-gray-700 cursor-pointer hover:text-blue-500"
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  ))}
   <Pagination  totalItems={quest}
        itemsPerPage={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setShowScore={setShowScore}
        setScore={setScore}
        saveAnswer={saveAnswer}/>

        
        </div>
   ):(
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-xl mt-4">Your Score: {score} / {quest.length}</p>
        </div>
      )}

       

        </>
    )
 }
 export default Quiz;