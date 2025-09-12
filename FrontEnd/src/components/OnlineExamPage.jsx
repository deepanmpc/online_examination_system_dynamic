import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchExams = async () => {
  const response = await axios.get("http://localhost:8080/api/admin/exams");
  return response.data;
};

const fetchRandomMcqsByExam = async (examName, count) => {
  if (!examName || !count) return [];
  const response = await axios.get(`http://localhost:8080/api/admin/mcqs/${examName}/random/${count}`);
  return response.data;
};

const OnlineExamPage = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    year: "",
    course: "",
    examName: "",
    questionCount: 5, // Default to 5 random questions
    isExamStarted: false,
  });

  const [timer, setTimer] = useState(900); // 15 minutes
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState("");

  const { data: exams, isLoading: examsLoading, isError: examsError } = useQuery({
    queryKey: ["exams"],
    queryFn: fetchExams,
  });

  const { data: questions, isLoading: questionsLoading, isError: questionsError } = useQuery({
    queryKey: ["mcqs", formData.examName, formData.questionCount],
    queryFn: () => fetchRandomMcqsByExam(formData.examName, formData.questionCount),
    enabled: !!formData.examName && formData.questionCount > 0,
  });

  useEffect(() => {
    let interval;
    if (formData.isExamStarted && !isSubmitted) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [formData.isExamStarted, isSubmitted]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startExam = () => {
    const { studentId, year, course, examName, questionCount } = formData;

    if (studentId && year && course && examName && questionCount > 0) {
      setFormData((prev) => ({ ...prev, isExamStarted: true }));
    } else {
      alert("Please fill in all fields and specify question count to start the exam.");
    }
  };

  const handleAnswerChange = (e, id) => {
    setAnswers((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const handleSubmit = async () => {
    let scoreCount = 0;
    questions.forEach((q) => {
      const userAnswer = answers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        scoreCount++;
      }
    });
    setScore(scoreCount);
    setIsSubmitted(true);

    const data = {
      studentId: formData.studentId,
      year: formData.year,
      course: formData.course,
      examName: formData.examName,
      score: scoreCount,
    };

    try {
      await axios.post("http://localhost:8080/api/exam-participants", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Your exam data has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting exam data:", error);
      alert("There was an error submitting your exam data. Please try again.");
    }
  };

  if (!formData.isExamStarted) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Online Exam Portal</h1>

        <div className="space-y-4">
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            placeholder="Enter Student ID"
            className="w-full p-2 border rounded"
          />

          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Year</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Final Year">Final Year</option>
          </select>

          <select
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Course</option>
            <option value="BSc">BSc</option>
            <option value="BCom">BCom</option>
            <option value="BA">BA</option>
            <option value="BCA">BCA</option>
            <option value="MSc">MSc</option>
          </select>

          <select
            name="examName"
            value={formData.examName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Exam</option>
            {examsLoading ? (
              <option>Loading exams...</option>
            ) : examsError ? (
              <option>Error loading exams</option>
            ) : (
              exams.map((exam) => (
                <option key={exam.id} value={exam.name}>
                  {exam.name}
                </option>
              ))
            )}
          </select>

          <input
            type="number"
            name="questionCount"
            value={formData.questionCount}
            onChange={handleInputChange}
            placeholder="Number of random questions"
            className="w-full p-2 border rounded"
            min="1"
          />

          <button
            onClick={startExam}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Exam: {formData.examName} | {formData.course} - {formData.year} | ID: {formData.studentId}
        </h2>
        <div className="text-red-600 font-bold text-lg">Time Left: {formatTime(timer)}</div>
      </div>

      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Exam Submitted</h2>
          <p className="text-xl">Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <>
          {questionsLoading ? (
            <div>Loading questions...</div>
          ) : questionsError ? (
            <div>Error loading questions</div>
          ) : (
            questions.map((q) => (
              <div key={q.id} className="mb-4">
                <p className="font-semibold mb-2">
                  {q.id}. {q.question}
                </p>
                <div className="flex flex-col">
                  {q.options.map((option, index) => (
                    <label key={index} className="mb-2">
                      <input
                        type="radio"
                        name={q.id}
                        value={option}
                        onChange={(e) => handleAnswerChange(e, q.id)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))
          )}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Exam
          </button>
        </>
      )}
    </div>
  );
};

export default OnlineExamPage;