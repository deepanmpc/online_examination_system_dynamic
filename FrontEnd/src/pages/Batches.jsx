import Button from "../ui/Button";

import SelectCourse from "../features/batches/SelectCourse";
import { useCreateBatch } from "../features/batches/useCreateBatch";
import { useNavigate, useParams } from "react-router-dom";

function Batches(){
    const {isLoading,courses} = useCourses();
    const navigate = useNavigate();
  


    return (
        <div>
      <h2 className="text-4xl mb-3">Batches</h2>  
      {
        courses?.data.length === 0 ? <div className="flex flex-col gap-4">
          <p>No Courses Found</p>
          <Button onClick={()=> navigate("/courses")}>Create Course</Button>
        </div> : 
        <div>
        <p className="text-lg mb-4">Choose a course</p>
        <ul className="flex flex-col gap-3 border-2 bg-white p-4 ">
          {
              courses?.data.map((course)=> <SelectCourse course={course} key={course.courseId} />)
          }
        </ul>
        </div>
      }
      
   
      
      </div>

    )

}

export default Batches;