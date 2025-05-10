import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/admin/exams/";


export async function createExamApi(exam){

    const {subjectCode, name , description, totalMarks } = exam;

    const response = await axios({
        method: 'post',
        url : `${BASE_URL}create/${subjectCode}`,
        data: {
            name,
            description,
            totalMarks
        }

    })

}

export async function getExamBySubjectCode(subjectCode){

    const response = await axios({
        method:'get',
        url: `${BASE_URL}id/${subjectCode}`
    })

    return response.data;
}

export async function findAllExam(){

    const response = await axios({
        method:'get',
        url : BASE_URL
    })

    return response.data;
}

export async function deleteExamApi(id){

    

    const response = await axios({
        method:'delete',
        url: `${BASE_URL}id/${id}`
    })
}