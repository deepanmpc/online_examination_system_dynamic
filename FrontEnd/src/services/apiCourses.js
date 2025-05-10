import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/admin/courses";


export async function createCourse(newCourse){
    const {courseName,courseDescription,courseCode} = newCourse;
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/create`,
            data: {
              courseName,
              courseDescription,
              courseCode
            }
          });
          
          return response;
    }
catch(err){
    console.log(err);
}

}

export async function getAllCourses(){

    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response;
      } catch (error) {
        console.error(error);
      }

}

export async function updateCourse(newCourse){
    
 
    const {courseId,courseName,courseDescription,courseCode} = newCourse;
    try {
        const response = await axios({
            method: 'put',
            url: `${BASE_URL}/update`,
            data: {
                courseId,
              courseName,
              courseDescription,
              courseCode
              
            }
          });
          
          return response;
    }
catch(err){
    console.log(err);
}

}

export async function deleteCourse(courseId){
    try{
        const response = await axios({
            method:'delete',
            url:`${BASE_URL}/${courseId}`,
           
        })

        return response;
    }
catch(err){
    console.log(err);
}
}