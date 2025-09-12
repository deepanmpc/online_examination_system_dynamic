import { NavLink } from "react-router-dom";
import { MdDashboard, MdLibraryBooks, MdGroups, MdEventNote, MdQuestionMark, MdGrade, MdSchool, MdBook } from "react-icons/md";

function Sidebar({ role }) {
  return (
    <aside className="bg-neutral-200 row-span-full px-20 py-8">
      <p className="mb-8">{role === 'admin' ? 'Admin Portal' : 'Student Portal'}</p>
      <nav>
        <ul className="flex flex-col gap-6">
          <li>
            <MdDashboard className="inline-block mr-3" size="30px" />
            <NavLink to={role === 'admin' ? '/admin-dashboard' : '/student-dashboard'} className="text-md">
              Dashboard
            </NavLink>
          </li>
          {role === 'admin' && (
            <>
              <li>
                <MdBook className="inline-block mr-3" size="30px" />
                <NavLink to="/admin-dashboard/subjects">
                  Subjects
                </NavLink>
              </li>
              <li>
                <MdSchool className="inline-block mr-3" size="30px" />
                <NavLink to="/admin-dashboard/semesters">
                  Semesters
                </NavLink>
              </li>
              <li>
                <MdEventNote className="inline-block mr-3" size="30px" />
                <NavLink to="/admin-dashboard/exams">
                  Exams
                </NavLink>
              </li>
              <li>
                <MdQuestionMark className="inline-block mr-3" size="30px" />
                <NavLink to="/admin-dashboard/create-mcq">
                  Create MCQ
                </NavLink>
              </li>
              <li>
                <MdGrade className="inline-block mr-3" size="30px" />
                <NavLink to="/admin-dashboard/marks">
                  Marks
                </NavLink>
              </li>
            </>
          )}
          {role === 'student' && (
            <>
              <li>
                <MdLibraryBooks className="inline-block mr-3" size="30px" />
                <NavLink to="/online-exam">
                  Online Exam
                </NavLink>
              </li>
              <li>
                <MdQuestionMark className="inline-block mr-3" size="30px" />
                <NavLink to="/practice-questions">
                  Practice Questions
                </NavLink>
              </li>
              <li>
                <MdEventNote className="inline-block mr-3" size="30px" />
                <NavLink to="/exam-schedules">
                  Exam Schedules
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;