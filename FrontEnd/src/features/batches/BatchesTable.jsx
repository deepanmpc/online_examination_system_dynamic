import {useState} from "react";

import CreateBatchesForm from "./CreateBatchesForm";

import Button from "../../ui/Button";
import BatchRows from "./BatchRows";

function BatchesTable({courseBatch,courseName}){

    const [showCreateForm,setShowCreateForm] = useState(false);

    

    return(
        <div className="flex flex-col gap-6">
        <div className="border-2 border-slate-200 bg-white" role="table">
            <header className="flex justify-around uppercase bg-slate-200" role="header">
            <div>Name</div>
            <div>Code</div>
            <div>Edit</div>
            <div>Delete</div>
            </header>

            {
                courseBatch?.data.map((batch)=> <BatchRows key={batch.batchId} batch={batch} courseName={courseName} />)
            }

            
           

        </div>
        <Button onClick={()=> setShowCreateForm((show)=> !show)}>Add New Batch</Button>
        {
           showCreateForm && <CreateBatchesForm setShowCreateForm={setShowCreateForm} courseName={courseName} />
           
        }

      
        </div>
    )

}

export default BatchesTable;