import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
 LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const overallMarksData = {
    labels: ['Math', 'Science', 'English', 'History', 'Geography', 'Civics'],
    datasets: [
      {
        label: 'Overall Subject Marks',
        data: [85, 90, 75, 65, 70, 80],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56',
          '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        borderWidth: 1,
      },
    ],
  };

  const yearEndMarksData = {
    labels: ['Math', 'Science', 'English', 'History', 'Geography', 'Civics'],
    datasets: [
      {
        label: 'Year-End Marks',
        data: [88, 92, 78, 70, 75, 83],
        backgroundColor: [
          '#1ABC9C', '#F39C12', '#8E44AD',
          '#E74C3C', '#3498DB', '#2ECC71'
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Marks Progress',
        data: [78, 85, 80, 90, 88],
        fill: false,
        borderColor: '#2E86C1',
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>Student Dashboard</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '50px' }}>
        <div style={{ width: '280px', height: '280px' }}>
          <h4>Overall Average Subject Marks</h4>
          <Pie data={overallMarksData} />
        </div>
        <div style={{ width: '280px', height: '280px' }}>
          <h4>Year-End Average Subject Marks</h4>
          <Pie data={yearEndMarksData} />
        </div>
      </div>

      <div style={{ width: '550px', margin: '0 auto' }}>
        <h4>Marks Over Months</h4>
        <Line data={lineData} />
      </div>
    </div>
  );
}

export default Dashboard;