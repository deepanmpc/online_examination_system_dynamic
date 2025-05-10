import { useQuery } from "@tanstack/react-query"
import { getAllBatchesApi } from "../../services/apiBatches"

export const useBatchesbyCourse = (courseName)=>{
  const {isLoading,data:courseBatch} = useQuery({
        queryKey:['batches'],
        queryFn: ()=> getAllBatchesApi(courseName)
    })

    return {isLoading,courseBatch}
}