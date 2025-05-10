import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBatchApi } from "../../services/apiBatches";
import toast from "react-hot-toast";

export function useCreateBatch(){
    const queryClient = useQueryClient();
   const {mutate:createBatch,isPending:isCreating} =useMutation({
        mutationFn: createBatchApi,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['batches']
            })
            toast.success('Batch created succcessfully');
        },
        onError:()=>{
            toast.error("Batch not created");
        }

    })

    return {createBatch,isCreating};
}