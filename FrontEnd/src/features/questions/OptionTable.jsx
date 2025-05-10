import { useState } from "react";
import OptionRow from "./OptionRow";



function OptionTable({mcqOptions}){

    const [showForm,setShowForm] = useState(false);



    return(
    <div className="flex flex-col gap-4">
        <h2 className="text-4xl mb-3">All Options</h2>
        <div className="border-2 border-slate-200 bg-white" role="table">
        <header className="grid grid-cols-3 gap-2 bg-slate-200 p-3 uppercase justify-items-center" role="header">
            <div>
                Option
            </div>
            <div>
                Edit
            </div>
            <div>
                Delete
            </div>
            </header>
            
            {
               mcqOptions.map((option)=> <OptionRow key={option.id} option={option} />)
            }
                
                  
                </div>
                
 
            
        </div>

    )

}

export default OptionTable;