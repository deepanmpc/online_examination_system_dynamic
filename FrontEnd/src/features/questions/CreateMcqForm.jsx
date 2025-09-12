import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const fetchExams = async () => {
  const response = await axios.get("http://localhost:8080/api/admin/exams");
  return response.data;
};

const createMcqApi = async (mcqData) => {
  const { examName, question, options, answer, points } = mcqData;
  const response = await axios.post(`http://localhost:8080/api/admin/mcqs/${examName}/create`, {
    mcqDtos: [
      {
        question,
        options,
        answer,
        points,
      },
    ],
  });
  return response.data;
};

function CreateMcqForm() {
  const queryClient = useQueryClient();
  const [examName, setExamName] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(1);

  const { data: exams, isLoading: examsLoading, isError: examsError } = useQuery({
    queryKey: ["exams"],
    queryFn: fetchExams,
  });

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createMcqApi,
    onSuccess: () => {
      toast.success("MCQ created successfully!");
      setQuestion("");
      setOptions(['', '', '', '']);
      setAnswer("");
      setPoints(1);
      queryClient.invalidateQueries(["mcqs", examName]);
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create MCQ.");
    },
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!examName || !question || options.some(opt => !opt) || !answer) {
      toast.error("Please fill in all fields.");
      return;
    }
    mutate({ examName, question, options, answer, points });
  };

  if (examsLoading) return <div>Loading exams...</div>;
  if (examsError) return <div>Error loading exams.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New MCQ</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Exam:</label>
          <select
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">-- Select an Exam --</option>
            {exams.map((exam) => (
              <option key={exam.id} value={exam.name}>
                {exam.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Options:</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder={`Option ${index + 1}`}
              required
            />
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correct Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Points:</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create MCQ"}
        </button>
      </form>
    </div>
  );
}

export default CreateMcqForm;