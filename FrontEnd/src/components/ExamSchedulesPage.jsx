import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchExamSchedules = async () => {
  const response = await axios.get('http://localhost:8080/api/exam-schedules');
  return response.data;
};

const ExamSchedulesPage = () => {
  const { data: events, isLoading, isError } = useQuery({
    queryKey: ['examSchedules'],
    queryFn: fetchExamSchedules,
    select: (data) =>
      data.map((event) => ({
        title: event.examName,
        date: event.examDate,
        extendedProps: {
          courseName: event.courseName,
          description: event.description,
        },
      })),
  });

  const handleEventClick = (info) => {
    const event = info.event;
    const examDetails = `
      Exam: ${event.title}
      Course: ${event.extendedProps.courseName}
      Date: ${event.startStr}
      Description: ${event.extendedProps.description}
    `;
    alert(examDetails);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="calendar-container">
      <h1 className="text-center text-2xl font-bold mb-4">Exam Schedules</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default ExamSchedulesPage;