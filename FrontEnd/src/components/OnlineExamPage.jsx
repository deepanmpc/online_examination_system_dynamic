import React, { useState, useEffect } from "react";
import axios from "axios";

const OnlineExamPage = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    year: "",
    course: "",
    examName: "",
    examPassword: "",
    isExamStarted: false,
  });

  const [timer, setTimer] = useState(900); // 15 minutes
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const examPassword = "Exam123"; // The correct password for the exam

  const questions = [
    { id: 1, question: "What does HTML stand for?", answer: "Hyper Text Markup Language" },
    { id: 2, question: "What is the capital of France?", answer: "Paris" },
    { id: 3, question: "2 + 2 * 2 = ?", answer: "6" },
    { id: 4, question: "React is a ___ library?", answer: "JavaScript" },
    { id: 5, question: "CSS stands for?", answer: "Cascading Style Sheets" },
    { id: 6, question: "What is the boiling point of water?", answer: "100" },
    { id: 7, question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
    { id: 8, question: "What does CPU stand for?", answer: "Central Processing Unit" },
    { id: 9, question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { id: 10, question: "Speed = Distance / ___ ?", answer: "Time" },
    { id: 11, question: "HTML tag for image?", answer: "img" },
    { id: 12, question: "Earth has how many moons?", answer: "1" },
    { id: 13, question: "Largest organ in human body?", answer: "Skin" },
    { id: 14, question: "What does JS stand for?", answer: "JavaScript" },
    { id: 15, question: "H2O is the formula for?", answer: "Water" },
    { id: 16, question: "What year did WW2 end?", answer: "1945" },
    { id: 17, question: "PI is approximately?", answer: "3.14" },
    { id: 18, question: "Which gas do plants absorb?", answer: "Carbon Dioxide" },
    { id: 19, question: "React is developed by?", answer: "Facebook" },
    { id: 20, question: "RAM stands for?", answer: "Random Access Memory" },
  ];

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
    const { studentId, year, course, examName, examPassword: enteredPassword } = formData;

    if (studentId && year && course && examName && enteredPassword) {
      if (enteredPassword === examPassword) {
        setPasswordError(""); // Clear any previous password errors
        setFormData((prev) => ({ ...prev, isExamStarted: true }));
      } else {
        setPasswordError("Incorrect password. Please try again.");
      }
    } else {
      alert("Please fill in all fields to start the exam.");
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

    // Prepare the data for the API request
    const data = {
      studentId: formData.studentId,
      year: formData.year,
      course: formData.course,
      examName: formData.examName,
      score: scoreCount,
    };

    // Send the data to the backend API
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
            <option value="Midterm Physics">Midterm Physics</option>
            <option value="Final Chemistry">Final Chemistry</option>
            <option value="Mathematics Internal">Mathematics Internal</option>
            <option value="Computer Science Theory">Computer Science Theory</option>
          </select>

          <input
            type="password"
            name="examPassword"
            value={formData.examPassword}
            onChange={handleInputChange}
            placeholder="Enter Exam Password"
            className="w-full p-2 border rounded"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}

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
          {questions.map((q) => (
            <div key={q.id} className="mb-4">
              <p className="font-semibold mb-2">
                {q.id}. {q.question}
              </p>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(e, q.id)}
              />
            </div>
          ))}
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