import { useState,useEffect } from "react";

function Pagination ({totalItems, itemsPerPage, currentPage, setCurrentPage,setShowScore,setScore,saveAnswer}){
    
    let [timer,setTimer]=useState(10);

    useEffect(()=>{
        if(timer===0)
            handleSubmit();
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
          }, 10000);
          return () => clearInterval(interval);
        }, [timer]);
   
    
    let totalPage=totalItems.length/itemsPerPage;
    
    
    
    //console.log(totalItems)
    let pagNumber=[]
    for(let i=1;i<=totalPage;i++)
        {
            pagNumber.push(i);
        }
    //console.log(pagNumber.length)

    const handleSubmit=()=>{
    let finalScore=0;
    for(let i=0;i<totalItems.length;i++){
        if(totalItems[i].correctAnswer===saveAnswer[i+1])
            finalScore++;
        
    }
    // console.log(totalItems[0].correctAnswer);
    // console.log(saveAnswer[1]);

    console.log(finalScore)

   
        setScore(finalScore);
        setShowScore(true);
}
    
   // setScore(finalScore);

        

    return(
      <>
       {/* Timer */}
       <div className="text-lg text-center mb-4">
        Time Left: <span className="font-medium text-purple-600">{timer}m</span>
      </div>
    
      {/* Nav Buttons */}
      <div className="flex items-center justify-between mb-5 mx-4">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 text-white hover:bg-purple-600'} transition duration-200`}
        >
          Prev
        </button>
    
        {/* Page Numbers */}
        <div className="flex flex-grow justify-center space-x-2">
          {pagNumber.map((i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`px-4 py-2 rounded-lg ${currentPage === i ? 'bg-purple-700 text-white' : 'bg-white text-purple-700 border border-purple-700'} hover:bg-purple-600 hover:text-white transition duration-200`}
            >
              {i}
            </button>
          ))}
        </div>
    
       
    
        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pagNumber.length}
          className={`px-5 py-2 rounded-lg ${currentPage === pagNumber.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 text-white hover:bg-purple-600'} transition duration-200`}
        >
          Next
        </button>

         {/* Submit Button */}
         <button
          onClick={() => handleSubmit()}
          className="mx-5 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition duration-200"
        >
          Submit
        </button>
      </div>
    </>
    
      
    )
}

export default Pagination