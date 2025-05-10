import { NavLink } from "react-router-dom";
import { MdDashboard, MdLibraryBooks, MdGroups, MdEventNote, MdQuestionMark, MdGrade, MdSchool, MdBook } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="bg-neutral-200 row-span-full px-20 py-8">
      <p className="mb-8">Admin Portal</p>
      <nav>
        <ul className="flex flex-col gap-6">
          <li>
            <MdDashboard className="inline-block mr-3" size="30px" />
            <NavLink to="/dashboard" className="text-md">
              Dashboard
            </NavLink>
          </li>
          {/* Removed Courses segment */}
          
          <li>
            <MdBook className="inline-block mr-3" size="30px" />
            <NavLink to="/dashboard/subjects">
              Subjects
            </NavLink>
          </li>
          <li>
            <MdSchool className="inline-block mr-3" size="30px" />
            <NavLink to="/dashboard/semesters">
              Semesters
            </NavLink>
          </li>
          <li>
            <MdEventNote className="inline-block mr-3" size="30px" />
            <NavLink to="/dashboard/exams">
              Exams
            </NavLink>
          </li>
         
          <li>
            <MdGrade className="inline-block mr-3" size="30px" />
            <NavLink to="/dashboard/marks">
              Marks
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;