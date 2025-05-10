import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { updateMcqAPi } from "../../services/apiMcqs";

export const useUpdateMcq=()=>{
    const queryClient = useQueryClient();
    const{mutate:updateMcq,isPending:isEditing} = useMutation({
        mutationFn:updateMcqAPi,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey:['mcqs']
            })

            toast.success("Mcq updated successfully");
        },
        onError: ()=>{
            toast.error("Mcq not updated");
        }
    });

    return {updateMcq,isEditing}
}