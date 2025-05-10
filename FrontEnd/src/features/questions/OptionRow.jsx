import { MdEditDocument,MdDelete  } from "react-icons/md";


function OptionRow({option}){
   

    return (
        <>
        <div className="grid grid-cols-3  p-2 border-b-2 justify-items-center items-center">
             <p>{option.optionTitle}</p>
             <button className="hover:cursor-pointer" >
             <MdEditDocument size={25} />
             </button>
             
             <button ><MdDelete size={25} /></button>
        </div>
        
 
        {/* {editForm && 
        <div className="border-2" >
 
        <CreateMcqsForm mcq={mcq} setEditForm={setEditForm} examName={examName} /> */}
        {/* </div> */}
 
        </>
    )

}

export default OptionRow;