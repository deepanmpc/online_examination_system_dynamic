import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

// API call to fetch all exam papers
const fetchExamPapers = async () => {
  const response = await axios.get('http://localhost:8080/api/exam-pdfs'); // Adjust the API endpoint as needed
  return response.data;
};

const DownloadAllPapers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['examPapers'],
    queryFn: fetchExamPapers,
  });

  // Function to handle downloading the PDF (assumes fileData is base64 or binary)
  const handleDownload = (fileData, fileName) => {
    const blob = new Blob([new Uint8Array(fileData)], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) return <div className="p-6 text-center">Loading sample papers...</div>;
  if (isError) {
    toast.error('Failed to fetch sample papers');
    return <div className="p-6 text-center text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Download Sample Papers</h1>
      
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Exam Name</th>
            <th className="px-4 py-2 border-b text-left">Course</th>
            <th className="px-4 py-2 border-b text-left">Year</th>
            <th className="px-4 py-2 border-b text-left">Subject</th>
            <th className="px-4 py-2 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((paper) => (
            <tr key={paper.id}>
              <td className="px-4 py-2 border-b">{paper.examName}</td>
              <td className="px-4 py-2 border-b">{paper.course}</td>
              <td className="px-4 py-2 border-b">{paper.year}</td>
              <td className="px-4 py-2 border-b">{paper.subjectName}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleDownload(paper.pdfData, `${paper.examName}-${paper.subjectName}.pdf`)}
                  className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SamplePapers;