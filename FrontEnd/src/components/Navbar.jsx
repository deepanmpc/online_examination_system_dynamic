import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium hover:text-blue-600 ${
                isActive(item.path) ? "text-blue-900 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={scrollToBottom}
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Contact
          </button>
        </div>

        {/* Login/Register */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;