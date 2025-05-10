import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBatchApi } from "../../services/apiBatches";
import toast from "react-hot-toast";

export const useDeleteBatch = ()=> {
    const queryClient = useQueryClient();
 const {mutate: deleteBatch, isPending: isDeleting}  = useMutation({
        mutationFn: deleteBatchApi,
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: ['batches']
            })
            toast.success("Batch Deleted Successfully");
        },

        onError: ()=>{
            toast.error("There has been an error");
        }

    })

    return {deleteBatch,isDeleting}
}