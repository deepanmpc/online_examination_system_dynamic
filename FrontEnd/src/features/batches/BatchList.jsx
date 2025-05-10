function BatchList({batch}){

    return (
       <>
        <li className="hover:bg-slate-200 hover:cursor-pointer">{batch.batchName}</li>
       
       </>
    )

}


export default BatchList;