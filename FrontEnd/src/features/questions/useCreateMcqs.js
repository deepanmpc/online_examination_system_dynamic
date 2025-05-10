import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMcqsApi } from "../../services/apiMcqs";
import toast from "react-hot-toast";


export const useCreateMcqs = (examId)=> {
    const queryClient = useQueryClient();

    const{mutate:createMcq, isPending: isCreating } = useMutation({
        mutationFn: createMcqsApi,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [`${examId}-mcqs`]
            })
            toast.success("Mcq created successfully");
        },
        onError: ()=> {
            toast.error("There is been a problem");
        }
    })

    return {createMcq,isCreating}
}