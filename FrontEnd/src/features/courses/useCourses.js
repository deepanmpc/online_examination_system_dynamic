import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../services/apiCourses";

export function useCourses() {
  const {
    isLoading,
    data: courses,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  return { isLoading, error, courses };
}
