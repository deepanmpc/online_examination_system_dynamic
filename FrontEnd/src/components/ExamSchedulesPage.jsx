import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';  // For interaction (clicking, dragging)

const ExamSchedulesPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Predefined exam data
    const predefinedExams = [
      {
        title: "Math 101 Final Exam",
        courseName: "Math 101",
        description: "Final exam for Math 101 covering Algebra and Geometry."
      },
      {
        title: "History 202 Midterm Exam",
        courseName: "History 202",
        description: "Midterm exam for History 202 covering World War II."
      },
      {
        title: "Computer Science 301 Practical Exam",
        courseName: "Computer Science 301",
        description: "Practical exam for CS 301 on Data Structures and Algorithms."
      },
      {
        title: "Chemistry 101 Lab Exam",
        courseName: "Chemistry 101",
        description: "Lab exam for Chemistry 101 on Organic Chemistry."
      },
      {
        title: "Physics 102 Final Exam",
        courseName: "Physics 102",
        description: "Final exam for Physics 102 on Mechanics and Waves."
      }
    ];

    // Get 5 random dates in May 2025 (use the first 31 days of May)
    const randomDates = generateRandomDates("2025-05-01", "2025-05-31", 5);

    // Format the predefined data for FullCalendar and assign to random dates
    const formattedEvents = predefinedExams.map((exam, index) => {
      const randomDate = randomDates[index]; // Get a random date
      return {
        title: `${exam.courseName} - ${exam.title}`,
        date: randomDate,
        description: exam.description,
        courseName: exam.courseName,
        id: index + 1
      };
    });

    // Set events in the state
    setEvents(formattedEvents);
  }, []);

  // Function to generate random dates within a specified range
  const generateRandomDates = (startDate, endDate, numberOfDates) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];

    while (dates.length < numberOfDates) {
      const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      const formattedDate = randomDate.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
      
      if (!dates.includes(formattedDate)) {
        dates.push(formattedDate);
      }
    }

    return dates;
  };

  // Event click handler to show exam details
  const handleEventClick = (info) => {
    const event = info.event;
    const examDetails = `
      Exam: ${event.title}
      Course: ${event.extendedProps.courseName}
      Date: ${event.startStr}
      Description: ${event.extendedProps.description}
    `;
    alert(examDetails);  // You can replace alert with a modal or any custom UI
  };

  return (
    <div className="calendar-container">
      <h1 className="text-center text-2xl font-bold mb-4">Exam Schedules for May 2025</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}  // Pass the events to FullCalendar
        eventClick={handleEventClick}  // Event click handler
      />
    </div>
  );
};

export default ExamSchedulesPage;