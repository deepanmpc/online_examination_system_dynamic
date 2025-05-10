import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ChooseExam from "../features/questions/ChooseExam";

function Question(){

    const navigate = useNavigate();
    const {exams} = useExams();



    return (
        <div>
            <h2 className="text-4xl mb-3">Questions</h2>
            {
        exams?.length === 0 ? <div className="flex flex-col gap-4">
          <p>No Exams Found</p>
          <Button onClick={()=> navigate("/exams")}>Create Exam</Button>
        </div> : 
        <div>
        <p className="text-lg mb-4">Choose a exam</p>
        <ul className="flex flex-col gap-3 border-2 bg-white p-4 ">
          {
              exams?.map((exam)=> <ChooseExam exam={exam} key={exam.id} />)
          }
        </ul>
        </div>
      }
        </div>
    )

}

export default Question;