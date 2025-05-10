import { useParams } from "react-router-dom";
import CreateMcqsForm from "./CreateMcqsForm";
import { useEffect, useState } from "react";


function CreateExamQuestion(){

   
    const {examName,questionType} = useParams();

   


    

    return (
        <>
        {
           questionType === 'mcq' && <CreateMcqsForm examName={examName} />
        }
      
        </>
    )

}

export default CreateExamQuestion;