import axios from 'axios';


const BASE_URL ='http://localhost:8080/api/admin/batches';


export async function createBatchApi(newBatch){
    
    const {courseName,batchName,batchCode,batchDescription} = newBatch;
    
    try{
        const response = await axios({
            method:'post',
            url:`${BASE_URL}/${courseName}`,
            data: {
                batchName,
                batchCode,
                batchDescription
            }
        })

        
        return response;

    }catch(err){
        console.log(err);
       
    }

}


export async function getAllBatchesApi(courseName){
    try{
        const response = await axios({
            method:'get',
            url:`${BASE_URL}/${courseName}`
        })
      
        return response;

    }catch(err){
        console.log(err);
    }

}

export async function updateBatch(batch){
    

    const {batchId,batchCode,batchName,batchDescription,courseName} = batch;

    

    try {

        const response = await axios({
            method: 'put',
            url : `${BASE_URL}/${courseName}`,
            data: {
                batchId,
                batchCode,
                batchName,
                batchDescription
            }
        })

        return response;

    }

    catch(err){
        console.log(err);
    }

}


export async function deleteBatchApi(batchId){
    try{
        const response = await axios({
            method:'delete',
            url:`${BASE_URL}/${batchId}`,
           
        })

        return response;
    }
catch(err){
    console.log(err);
}
}


export async function findAllBatches(){
    const response = await axios({
        method:'get',
        url: `${BASE_URL}/`
    })

    
    return response.data;
}