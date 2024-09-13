
function Pagination ({totalItems, itemsPerPage, currentPage, setCurrentPage}){
    let totalPage=totalItems/itemsPerPage;
   // console.log(totalPage)
    let pagNumber=[]
    for(let i=1;i<=totalPage;i++)
        {
            pagNumber.push(i);
        }
    console.log(pagNumber.length)
    return(
        <div>

        {pagNumber.map((i)=>(
            <button className=" flex-row justify-between items-center m-3" key={Math.random()} onClick={()=>setCurrentPage(i)}>{i}</button>
        ))}
        </div>
    )
}

export default Pagination