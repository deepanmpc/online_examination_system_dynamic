import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPracticeQuestions = async () => {
  const response = await axios.get("http://localhost:8080/api/practice-questions");
  return response.data;
};

const PracticeQuestions = () => {
  const { data: practiceQuestions, isLoading, isError } = useQuery({
    queryKey: ["practiceQuestions"],
    queryFn: fetchPracticeQuestions,
  });

  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const subjects = practiceQuestions
    ? [...new Set(practiceQuestions.map((q) => q.subject))]
    : [];
  const examTypes = practiceQuestions
    ? [...new Set(practiceQuestions.map((q) => q.examType))]
    : [];

  const fetchPDF = () => {
    const question = practiceQuestions.find(
      (q) => q.subject === subject && q.examType === examType
    );

    if (question) {
      setPdfUrl(question.pdfUrl);
    } else {
      alert("No PDF found for the selected subject and exam type.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Practice Questions</h1>
      <div className="mt-4">
        <p>Here you can practice questions for your upcoming exams.</p>

        <div className="mt-4">
          <label className="block text-sm font-medium">Select Subject:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Select Exam Type:</label>
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Exam Type</option>
            {examTypes.map((examType) => (
              <option key={examType} value={examType}>
                {examType}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <button
            onClick={fetchPDF}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Get Practice Questions PDF
          </button>
        </div>

        {pdfUrl && (
          <div className="mt-4">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Click here to view the practice questions PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeQuestions;