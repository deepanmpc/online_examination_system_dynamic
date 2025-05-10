import { useParams } from "react-router-dom";
import QuestionTypeForm from "./QuestionTypeForm";
import McqsTable from "./McqsTable";
import { useEffect, useState } from "react";
import { getMcqsByExam } from "../../services/apiMcqs";

function QuestionType(){

    const [mcqs, setMcqs] = useState([]);

    const {examName} = useParams();

    useEffect(()=>{
        const getData = async()=>{
            const response = await getMcqsByExam(examName);
            setMcqs(response);

        }
        getData();
    },[examName])

  

    return (

        <>
        {
            mcqs?.length > 0 ? 
            
            <>
            <h2 className="text-4xl mb-4">All Mcqs</h2>
            <McqsTable examName={examName} mcqs={mcqs} />
            
            </>

            
             : 
             
             <>
             <h2 className="text-3xl mb-4">Question type</h2>
                <QuestionTypeForm examName={examName} />
             
             
             </>
        }
        
      
        </>
    )

}

export default QuestionType;