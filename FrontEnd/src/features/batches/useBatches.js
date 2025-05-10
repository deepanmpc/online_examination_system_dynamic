import { useQuery } from "@tanstack/react-query"
import { findAllBatches } from "../../services/apiBatches"

export const useBatches = ()=>{
  const {isLoading,data:batches} = useQuery({
        queryKey:['allbatches'],
        queryFn: findAllBatches
    })

    return {isLoading,batches}
}