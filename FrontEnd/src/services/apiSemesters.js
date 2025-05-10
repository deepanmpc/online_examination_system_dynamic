import axios from 'axios';


const BASE_URL ='http://localhost:8080/api/admin/semesters/';



export async function createSemesterApi(semester){
    const {semesterName} = semester;

    try{

        const response = await axios({
            method: 'post',
            url: `${BASE_URL}create`,
            data: {
                semesterName
            }
        })

        return response.data;

    }catch(err){
        console.log(err);
    }

}


export async function getAllSemester(){

    try {

        const response = await axios({
            method:'get',
            url: BASE_URL

        })

        return response.data;

    }catch(err){
            console.log(err);
    }
}

export async function getAllSemesterByCoureseAPI(courseName){

    try {
        const response = await axios({
            method: 'get',
            url: `${BASE_URL}${courseName}`
        })
    
        return response.data


    }catch(err){
        console.log(err);
    }
   

}


export async function createSemesterByCourseApi(courseSemester){

    const {courseName,semesterName} = courseSemester;


    try{
      

            const response = await axios({
                method: 'post',
                url: `${BASE_URL}${courseName}`,
                data: {
                    semesterName
                }
            })

           
    
            return response.data;

       
       

    }catch(err){
        console.log(err);
    }
}


export async function updateSemester(semester){
    

    const {id,semesterName} = semester;

    

    try {

        const response = await axios({
            method: 'put',
            url : `${BASE_URL}${id}`,
            data: {
                semesterName
            }
        })

        return response;

    }

    catch(err){
        console.log(err);
    }

}

export async function getSemesterById(id){

    const response = await axios({
        method: 'get',
        url: `${BASE_URL}id/${id}`
    })

    return response.data;
}

export async function addSubjectsToSemester(id,subjectList){

    
    subjectList.map(async(subjectName)=> {
     
       
        const response = await axios({
            method:'put',
            url: `${BASE_URL}${id}/subjects`,
            data: {
              subjectName
                
            }
        })
    
        return response.data;

    })
   
}

export async function deleteSemesterApi(id){
    try{
        const response = await axios({
            method:'delete',
            url:`${BASE_URL}id/${id}`,
           
        })

        return response.data;
    }
catch(err){
    console.log(err);
}
}

export async function addCourseToSemester(id,courseList){


    courseList.map(async(courseName)=> {
        const response = await axios({
            method:'put',
            url: `${BASE_URL}addSemesters/${id}`,
            data: {
                courseName
            }

        })


        return response.data;
    })

    
   
    
}

export async function getSubjectsBySemesterId(id){


    const response = await axios({
        method:'get',
        url: `${BASE_URL}subjects/${id}`
    })


    return response.data;
}