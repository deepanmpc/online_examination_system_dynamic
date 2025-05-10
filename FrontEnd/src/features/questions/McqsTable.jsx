import { useState } from "react";
import McqItem from "./McqItem";
import Button from "../../ui/Button";
import CreateMcqsForm from "./CreateMcqsForm";


function McqsTable({mcqs,examName}){

    const [showForm,setShowForm] = useState(false);


    


    return(
    <div className="flex flex-col gap-4">
        <div className="border-2 border-slate-200 bg-white" role="table">
        <header className="grid grid-cols-[1fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] gap-2 bg-slate-200 p-3 uppercase justify-items-center" role="header">
            <div>
                Question
            </div>
           <div>
            Option
           </div>
            <div>
             Answer
            </div>
            <div>
                Points
            </div>
            <div>
                Edit
            </div>
            <div>
                Delete
            </div>
            </header>
             {
                 mcqs?.map((mcq)=> <McqItem mcq={mcq} key={mcq.id} examName={examName} />)
                }
                
                  
                </div>
                
        <Button onClick={()=> setShowForm((show)=> !show)}>Add Mcq</Button>

        {
            showForm && <CreateMcqsForm examName={examName} setShowForm={setShowForm} />
        }
            
        </div>

    )

}

export default McqsTable;