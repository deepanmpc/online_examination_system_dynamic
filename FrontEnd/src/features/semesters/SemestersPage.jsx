import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createSemesterApi } from "./api";

function SemestersPage() {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    semesterName: "",
    startDate: "",
    endDate: "",
    status: "Upcoming",
    courseName: courseName || "",
    year: new Date().getFullYear(),
  });

  // Create semester mutation
  const { mutate: createSemester } = useMutation({
    mutationFn: createSemesterApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["semesters"]);
      toast.success("Semester created successfully");
      setForm({
        semesterName: "",
        startDate: "",
        endDate: "",
        status: "Upcoming",
        courseName: courseName || "",
        year: new Date().getFullYear(),
      });
    },
    onError: () => toast.error("Failed to create semester"),
  });

  // Handle form submission to create a new semester
  const handleSubmit = (e) => {
    e.preventDefault();
    createSemester(form);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Manage Semesters for Course: {courseName}
      </h1>

      {/* Creation Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
        <input
          type="text"
          placeholder="Semester Name"
          value={form.semesterName}
          onChange={(e) => setForm({ ...form, semesterName: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="number"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="border p-2 rounded"
          placeholder="Year"
          required
        />
        <input
          type="text"
          value={form.courseName}
          onChange={(e) => setForm({ ...form, courseName: e.target.value })}
          className="border p-2 rounded"
          placeholder="Course Name"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Semester
        </button>
      </form>

      <button
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => navigate(`/semesters/${courseName}/subjects`)}
      >
        Manage Subjects
      </button>
    </div>
  );
}

export default SemestersPage;