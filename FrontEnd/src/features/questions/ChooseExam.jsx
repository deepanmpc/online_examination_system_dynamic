
import { useNavigate } from "react-router-dom";

function ChooseExam({exam}){

    const navigate = useNavigate();



    const clickHandler =async(examName)=>{
        navigate(`/questions/${examName}`);
    }

    return (
        <>
            <li className="text-lg hover:bg-slate-100 hover:cursor-pointer p-2" onClick={()=>clickHandler(exam.name)}>{exam.name}</li>
           

        </>
    )


}

export default ChooseExam;