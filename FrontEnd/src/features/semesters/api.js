// API functions for handling semester-related requests

export const getAllSemestersApi = async () => {
  const res = await fetch("http://localhost:8080/api/semesters");
  if (!res.ok) throw new Error("Failed to fetch semesters");
  return res.json();
};

export const createSemesterApi = async (newSemester) => {
  const res = await fetch("http://localhost:8080/api/semesters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSemester),
  });
  if (!res.ok) throw new Error("Failed to create semester");
  return res.json();
};

export const deleteSemesterApi = async (id) => {
  const res = await fetch(`http://localhost:8080/api/semesters/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete semester");
  return res;
};