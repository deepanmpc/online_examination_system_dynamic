import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const fetchMarks = async () => {
  const response = await axios.get('http://localhost:8080/api/exam-participants'); // Adjust endpoint
  return response.data;
};

const Marks = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['marks'],
    queryFn: fetchMarks,
  });

  if (isLoading) return <div className="p-6 text-center">Loading marks...</div>;
  if (isError) {
    toast.error('Failed to fetch marks');
    return <div className="p-6 text-center text-red-600">Error: {error.message}</div>;
  }

  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Student Marks</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Student ID</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Exam Name</th>
              <th className="border px-4 py-2">Exam Password</th>
              <th className="border px-4 py-2">Exam Taken</th>
              <th className="border px-4 py-2">Score</th>
              <th className="border px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((mark, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{mark.studentId}</td>
                <td className="border px-4 py-2">{mark.course}</td>
                <td className="border px-4 py-2">{currentDateTime}</td>
                <td className="border px-4 py-2">{mark.examName}</td>
                <td className="border px-4 py-2">****</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">{mark.score}</td>
                <td className="border px-4 py-2">{mark.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marks;