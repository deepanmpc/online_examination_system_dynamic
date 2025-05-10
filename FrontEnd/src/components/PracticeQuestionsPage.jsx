import React, { useState } from "react";

const PracticeQuestions = () => {
  // State for storing the selected subject and exam type
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [pdfUrl, setPdfUrl] = useState(""); // To store the PDF URL

  // Available subjects and exam types (you can expand these as needed)
  const subjects = ["Math", "History", "Computer Science", "Physics", "Chemistry"];
  const examTypes = ["Midterm", "Final", "Practical"];

  // Function to fetch the PDF URL based on the selected subject and exam type
  const fetchPDF = () => {
    // You can replace the following URLs with the actual URLs of the PDFs
    const pdfLinks = {
      "Math": {
        "Midterm": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/mathematics/mathematics-cbse-model-question-papers-2025-with-marking-scheme/1117023",
        "Final": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/mathematics/mathematics-2025-set-2/1119312",
        "Practical": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/mathematics/mathematics-2025-set-4/1119310",
      },
      "History": {
        "Midterm": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/history/history-cbse-model-question-papers-2025-with-marking-scheme/1117012",
        "Final": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/history/history-2025-set-1/1132368",
        "Practical": "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/history/history-2025-set-3/1132366",
      },
      // Add more subjects and exam types here...
    };

    // Check if the selected subject and exam type are valid
    if (pdfLinks[subject] && pdfLinks[subject][examType]) {
      setPdfUrl(pdfLinks[subject][examType]);
    } else {
      alert("No PDF found for the selected subject and exam type.");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Practice Questions</h1>
      <div className="mt-4">
        <p>Here you can practice questions for your upcoming exams.</p>

        {/* Subject selection */}
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

        {/* Exam type selection */}
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

        {/* Button to fetch the PDF */}
        <div className="mt-4">
          <button
            onClick={fetchPDF}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Get Practice Questions PDF
          </button>
        </div>

        {/* Display the download link if PDF is available */}
        {pdfUrl && (
          <div className="mt-4">
            <a
              href={pdfUrl}
              download
              className="text-blue-500 hover:underline"
            >
              Click here to download the practice questions PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeQuestions;