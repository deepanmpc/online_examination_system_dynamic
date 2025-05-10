import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/admin/subjects/";


export async function createSubject(subject) {
    const {subjectName,subjectCode,subjectDescription} = subject;

    const response = await axios({
        method: 'post',
        url: `${BASE_URL}create`,
        data: {
            subjectName,
            subjectCode,
            subjectDescription
        }
    })

    return response.data;
}

export async function getAllSubjectsApi(){

    const response = await axios({
        method:'get',
        url: BASE_URL

    })


    return response.data;
}

export async function updateSubject(subject){
    const {subjectName,subjectCode,subjectDescription,id} = subject;

    const response = await axios({
        method:"put",
        url: `${BASE_URL}update/${id}`,
        data: {
            subjectName,
            subjectCode,
            subjectDescription
        }

    })

    return response.data;

}

export async function deleteSubjectApi(id){

    console.log(id)

    const response = await axios({
        method:"delete",
        url: `${BASE_URL}delete/${id}`
    })

    return response.data;

}