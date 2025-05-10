import { useState } from "react";

import SemestersTable from "../features/semesters/SemestersTable";
import Button from "../ui/Button";
import CreateSemestersForm from "../features/semesters/CreateSemestersForm";
import { useCourses } from "../features/courses/useCourses";
import { useNavigate } from "react-router-dom";
import SelectCourse from "../features/semesters/SelectCourse";


function Semesters(){

    const {courses} = useCourses();

    const navigate = useNavigate();
   

    // const [showCreateForm,setShowCreateForm] = useState(false);
    // return (
    //     <div className="flex flex-col gap-4">
    //         <h2 className="text-4xl mb-3">All Semesters</h2>
    //         <SemestersTable />
    //         <Button onClick={()=> setShowCreateForm((show)=>!show)}>Add New Semester</Button>
    //         { 
    //         showCreateForm && <CreateSemestersForm setShowCreateForm={setShowCreateForm} />
    //             }
    //     </div>
    // )



    return (
        <div>
         <h2 className="text-4xl mb-3">Semesters</h2>  
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


export default Semesters;