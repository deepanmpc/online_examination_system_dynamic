import { useQuery } from "@tanstack/react-query"
import { getMcqsByExam } from "../../services/apiMcqs"

export function useMcqs(examName) {

    const {isLoading,data:mcqs} = useQuery({
        queryKey:[`${examName}-mcqs`],
        queryFn: getMcqsByExam(examName)
    })

   
    return {isLoading,mcqs}
}