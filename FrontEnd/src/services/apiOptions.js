import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/admin/options/";

export async function getMcqOptions(id){

    const response = await axios({
        method: 'get',
        url:`${BASE_URL}id/${id}`

    })
    return response.data;
}