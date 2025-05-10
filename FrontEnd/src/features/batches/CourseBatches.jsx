
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { useState } from "react";
import CreateBatchesForm from "./CreateBatchesForm";
import BatchesTable from "./BatchesTable";
import { useBatchesbyCourse } from "./useBatchesbyCourse";
import { useBatches } from "./useBatches";
import BatchList from "./BatchList";

function CourseBatches(){
    const [showCreateForm,setShowCreateForm] = useState(false);
    const {courseName} = useParams();

    const {courseBatch} = useBatchesbyCourse(courseName)
    const {batches} = useBatches();
    
    

    return (
        <>
        <h2 className="text-3xl mb-4">All Batches</h2>
       
{!courseBatch?.data.length ? <div className="mb-8"><Button onClick={()=> setShowCreateForm((show)=> !show)}>Add a Batch</Button></div> :  <BatchesTable courseBatch={courseBatch} courseName={courseName} />}
       <ul className="flex flex-col gap-4 bg-white p-8 text-lg">
       {
        batches?.map((batch)=> <BatchList key={batch.batchId} batch={batch} /> )
       } 
       </ul>
      
        {
            showCreateForm && <CreateBatchesForm courseName={courseName} setShowCreateForm={setShowCreateForm} />
        }
        </>
    )

}

export default CourseBatches;