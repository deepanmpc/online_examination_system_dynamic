import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

// API call to upload exam details with a PDF
const uploadExamApi = async (formData) => {
  const res = await fetch("http://localhost:8080/api/exam-pdfs", {
    method: "POST",
    headers: {
      // Do not set Content-Type for FormData
      "X-API-KEY": "your_api_key_here", // Optional - remove if not using
    },
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to upload exam");
  return res.json();
};

function UploadExamPage() {
  const defaultValues = {
    year: "2025",
    course: "B.Tech",
    examName: "Final Exam",
    subjectName: "Mathematics",
  };

  const [form, setForm] = useState({ ...defaultValues });
  const [pdfFile, setPdfFile] = useState(null);

  const { mutate: uploadExam, isLoading } = useMutation({
    mutationFn: uploadExamApi,
    onSuccess: () => {
      toast.success("Exam uploaded successfully");
      setForm({ ...defaultValues });
      setPdfFile(null);
    },
    onError: () => toast.error("Failed to upload exam"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, course, examName, subjectName } = form;

    if (!year || !course || !examName || !subjectName || !pdfFile) {
      toast.error("Please fill all fields and upload a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("year", year);
    formData.append("course", course);
    formData.append("examName", examName);
    formData.append("subjectName", subjectName);
    formData.append("file", pdfFile);

    uploadExam(formData);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl mb-6 font-semibold">Upload Exam Info</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Year Dropdown */}
        <label className="block">
          Year:
          <select
            className="border p-2 w-full bg-white"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </label>

        {/* Program of Study Dropdown */}
        <label className="block">
          Program of Study:
          <select
            className="border p-2 w-full bg-white"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
          >
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </label>

        {/* Exam Name Dropdown */}
        <label className="block">
          Exam Name:
          <select
            className="border p-2 w-full bg-white"
            value={form.examName}
            onChange={(e) => setForm({ ...form, examName: e.target.value })}
          >
            <option value="Final Exam">Final Exam</option>
            <option value="Midterm Exam">Midterm Exam</option>
            <option value="Supplementary Exam">Supplementary Exam</option>
          </select>
        </label>

        {/* Subject Name Dropdown */}
        <label className="block">
          Subject Name:
          <select
            className="border p-2 w-full bg-white"
            value={form.subjectName}
            onChange={(e) => setForm({ ...form, subjectName: e.target.value })}
          >
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </label>

        {/* PDF File Upload */}
        <label className="block">
          Upload PDF:
          <input
            type="file"
            accept=".pdf"
            className="border p-2 w-full bg-white"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default UploadExamPage;