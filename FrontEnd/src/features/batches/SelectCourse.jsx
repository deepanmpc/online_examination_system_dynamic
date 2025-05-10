
import { useNavigate } from "react-router-dom";

function SelectCourse({course}){

    const navigate = useNavigate();



    const clickHandler =async(courseName)=>{
        navigate(`/batches/${courseName}`);
    }

    return (
        <>
            <li className="text-lg hover:bg-slate-100 hover:cursor-pointer p-2" onClick={()=>clickHandler(course.courseName)}>{course.courseName}</li>
           

        </>
    )


}

export default SelectCourse;