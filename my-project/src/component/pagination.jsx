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
          <div className="text-xl text-center mb-4">
            Time Left: <span className="font-bold">{timer}m</span>
          </div>

        <div className="flex justify-center items-center space-x-3 mt-4">
        {pagNumber.map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === i ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 border-gray-300'
            } hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}
          >
            {i}
          </button>

          
        ))}

            <button
           
            onClick={() => handleSubmit()}
            className={`px-3 space-x-4 py-4 rounded-lg border bg-green-500  hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}
          >
            Submit
          </button>
      </div>
      </>
      
    )
}

export default Pagination