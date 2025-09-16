import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

// Layout and page components
import AppLayout from './ui/AppLayout';
import Dashboard from './ui/Dashboard';
import AdminDashboard from './ui/AdminDashboard'; // Import AdminDashboard
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Batches from './pages/Batches';
import CourseBatches from './features/batches/CourseBatches';
import CombinedExamModule from './features/exams/CombinedExamModule';
import Question from './pages/Questions';
import CreateExamQuestion from './features/questions/CreateExamQuestion';
import CreateMcqForm from './features/questions/CreateMcqForm';
import ContactForm from './pages/ContactForm';
import SubjectsPage from './features/subjects/SubjectsPage';
import Semesters from './features/semesters/SemestersPage';
import About from './components/About';

// Exam-related pages
import OnlineExamPage from './components/OnlineExamPage';
import PracticeQuestionsPage from './components/PracticeQuestionsPage';
import ExamSchedulesPage from './components/ExamSchedulesPage';
import SamplePapers from "./components/samplepapers";
import Marks from './features/Marks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" />

      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/about" element={<About />} />

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><AppLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} /> {/* Admin Dashboard content */}
            <Route path="batches" element={<Batches />} />
            <Route path="batches/:courseName" element={<CourseBatches />} />
            <Route path="exams" element={<CombinedExamModule />} />
            <Route path="semesters" element={<Semesters />} />
            <Route path="subjects" element={<SubjectsPage />} />
            <Route path="questions" element={<Question />} />
            <Route path="questions/:examName" element={<CreateExamQuestion />} />
            <Route path="create-mcq" element={<CreateMcqForm />} />
            <Route path="marks" element={<Marks />} />
          </Route>

          {/* Student Routes */}
          <Route path="/student-dashboard" element={<ProtectedRoute allowedRoles={["student"]}><AppLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} /> {/* Student Dashboard content */}
          </Route>
          <Route path="/online-exam" element={<ProtectedRoute allowedRoles={["student"]}><OnlineExamPage /></ProtectedRoute>} />
          <Route path="/practice-questions" element={<ProtectedRoute allowedRoles={["student"]}><PracticeQuestionsPage /></ProtectedRoute>} />
          <Route path="/exam-schedules" element={<ProtectedRoute allowedRoles={["student"]}><ExamSchedulesPage /></ProtectedRoute>} />
          <Route path="/sample-papers" element={<ProtectedRoute allowedRoles={["student"]}><SamplePapers /></ProtectedRoute>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;