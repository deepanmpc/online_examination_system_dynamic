import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// API methods
const getAllSubjectsApi = async () => {
  const res = await fetch("http://localhost:8080/api/subjects");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const createSubject = async (newSubject) => {
  const res = await fetch("http://localhost:8080/api/subjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSubject),
  });
  if (!res.ok) throw new Error("Failed to create");
  return res.json();
};

const deleteSubjectApi = async (id) => {
  const res = await fetch(`http://localhost:8080/api/subjects/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Delete failed");
  return res;
};

function SubjectsPage() {
  const { semesterId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    subjectName: "",
    subjectCode: "",
    description: "",
  });

  const queryClient = useQueryClient();

  const { data: subjects, isLoading } = useQuery({
    queryKey: ["subjects"],
    queryFn: getAllSubjectsApi,
  });

  const { mutate: createSubjectFn } = useMutation({
    mutationFn: createSubject,
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      toast.success("Subject created successfully");
    },
    onError: () => toast.error("Failed to create subject"),
  });

  const { mutate: deleteSubject } = useMutation({
    mutationFn: deleteSubjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      toast.success("Subject deleted successfully");
    },
    onError: () => toast.error("Failed to delete subject"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createSubjectFn(form);
    setForm({ subjectName: "", subjectCode: "", description: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      deleteSubject(id);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Manage Subjects</h1>

      {/* Form to add new subject */}
      <form className="mb-6 space-y-2" onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full"
          placeholder="Subject Name"
          value={form.subjectName}
          onChange={(e) => setForm({ ...form, subjectName: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Subject Code"
          value={form.subjectCode}
          onChange={(e) => setForm({ ...form, subjectCode: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Subject Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">
          Add Subject
        </button>
      </form>

      {/* Subject Table */}
      <div className="grid grid-cols-[1fr_1fr_2fr_auto_auto] gap-4 font-semibold border-b pb-2 mb-2">
        <span>Name</span>
        <span>Code</span>
        <span>Description</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        subjects.map((subj) => (
          <div
            key={subj.id}
            className="grid grid-cols-[1fr_1fr_2fr_auto_auto] gap-4 items-center border-b py-2"
          >
            <div>{subj.subjectName}</div>
            <div>{subj.subjectCode}</div>
            <div>{subj.description}</div>

            {/* Edit button - can be implemented later */}
            <button className="text-green-600">Edit</button>

            {/* Delete button */}
            <button className="text-red-600" onClick={() => handleDelete(subj.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      {semesterId && (
        <button className="mt-6 bg-indigo-600 text-white px-4 py-2">
          Add Selected to Semester
        </button>
      )}
    </div>
  );
}

export default SubjectsPage;