import { MdEditDocument,MdDelete  } from "react-icons/md";
import { useState } from "react";
import CreateMcqsForm from "./CreateMcqsForm";
import { deleteMcqApi } from "../../services/apiMcqs";
import { useNavigate } from "react-router-dom";


function McqItem({mcq,examName}){

    const[editForm,setEditForm] = useState(false);

    const navigate = useNavigate();

    const {id,question,options,answer,points} = mcq;

   const onEditCourse=()=>{
    setEditForm((show)=> !show);
   }

    return (
        <>
       <div className="grid grid-cols-[1fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr]  p-2 border-b-2 justify-items-center items-center">
            <h2>{question}</h2>
            <p onClick={()=>navigate(`/mcq/${id}/options`)} className="hover:cursor-auto">View option</p>  
            <p>{answer}</p>
            <p>{points}</p>
            <button className="hover:cursor-pointer" onClick={onEditCourse}>
            <MdEditDocument size={25} />
            </button>
            
            <button  onClick={()=> deleteMcqApi(id)}><MdDelete size={25} /></button>
       </div>
       

       {editForm && 
       <div className="border-2" >

       <CreateMcqsForm mcq={mcq} setEditForm={setEditForm} examName={examName} />
       </div>
}
       </>
    )

}

export default McqItem;