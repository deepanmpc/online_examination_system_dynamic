import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBatch } from "../../services/apiBatches";
import toast from "react-hot-toast";

export const useEditBatch = ()=> {
    const queryClient = useQueryClient();
    const {mutate:editBatch, isPending: isEditing}= useMutation({
        mutationFn: updateBatch,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: ['batches']
            })

            toast.success("Batch updated successfully");
        },
        onError:()=> {
            toast.error("Batch not updated");
        }
    })

    return {editBatch,isEditing}

}