import {useState} from "react";


import { MdEditDocument,MdDelete  } from "react-icons/md";
import CreateBatchesForm from "./CreateBatchesForm";
import { useDeleteBatch } from "./useDeleteBatch";

function BatchRows({batch,courseName}){

    const [editForm,setEditForm] = useState(false);

    const {deleteBatch} = useDeleteBatch();

    const {batchCode, batchName,batchId} = batch;

    


    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-around">
            <div>{batchName}</div>
            <div>{batchCode}</div>
            <button className="pl-4" onClick={()=>setEditForm((show)=> !show)}>
            <MdEditDocument size={25} />
            </button>
            <button onClick={()=> deleteBatch(batchId)}>
            <MdDelete size={25} />
            </button>

        </div>

        {
            editForm && <CreateBatchesForm courseName={courseName} setEditForm={setEditForm} currentBatch={batch}/>
        }

        </div>
       
    )

}

export default BatchRows;