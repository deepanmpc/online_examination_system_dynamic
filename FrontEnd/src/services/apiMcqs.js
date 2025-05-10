import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/admin/mcqs/";

export async function createMcqsApi(mcqs) {
    
    const {question,options,answer,points,examName} = mcqs;

    try{
        const response = await axios({
            method:'post',
            url : `${BASE_URL}${examName}/create`,
            data : {
               mcqDtos : [
                {
                    question,
                    options,
                    answer,
                    points
                }
               ]
            }
        }) 

    }catch(err){
        console.log(err);
    }

}

export async function getMcqsByExam(examName) {


    const response = await axios({
        method:'get',
        url: `${BASE_URL}${examName}`
    })


   
    return response.data;
}

export async function updateMcqAPi(mcq){

    const {id,question,options,answer,points} = mcq;

    const response = await axios({
        method:'put',
        url: `${BASE_URL}update/${id}`,
        data:{
            question,
            options,
            answer,
            points
        }
    })
}

export async function deleteMcqApi(id){

    console.log(id)
    const response = await axios({
        method:'delete',
        url:`${BASE_URL}delete/${id}`
    })
}