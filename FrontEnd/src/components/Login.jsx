import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // student or admin
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle the login process
  const handleLogin = async () => {
    // TEMPORARY INSECURE ADMIN BYPASS FOR TESTING ONLY
    if (role === "admin") {
      if (adminPassword === "admin") {
        localStorage.setItem("userRole", "admin");
        navigate("/admin-dashboard");
        return; // Bypass backend for admin login
      } else {
        setErrorMessage("Invalid admin password.");
        return;
      }
    }

    try {
      // Determine the endpoint based on role selection
      const loginEndpoint = "http://localhost:8080/user/login"; // Both admin and student use the same login endpoint

      // Prepare credentials
      const credentials = {
        username,
        password: password, // Only student password is sent to backend now
      };

      // Make the POST request to the backend for login
      const response = await axios.post(loginEndpoint, credentials);

      // If the response is successful, store user role and navigate
      if (response.status === 200) {
        const userRole = response.data.role; // Get role from backend response
        localStorage.setItem("userRole", userRole);

        if (userRole === "admin") { // This path should ideally not be hit if admin is bypassed above
          navigate("/admin-dashboard");
        } else if (userRole === "student") {
          navigate("/student-dashboard");
        } else {
          setErrorMessage("Unknown user role received.");
        }
      }
    } catch (error) {
      // If an error occurs, set the error message
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Lets Sign you in</h2>
        <p className="text-center text-gray-500">Welcome Back, <br /> You have been missed</p>

        {errorMessage && (
          <div className="bg-red-200 text-red-600 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <div className="mt-6">
          <div className="flex justify-center mb-4">
            <label className="mr-4">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />
              Admin
            </label>
          </div>

          {role === "student" ? (
            <>
              <input
                type="text"
                placeholder="Email, phone & username"
                className="input input-bordered w-full mb-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute right-4 top-3 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </>
          ) : (
            <div className="relative">
              <input
                type="password"
                placeholder="Admin Password"
                className="input input-bordered w-full"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
          )}

          <p 
            className="text-right text-sm text-blue-600 cursor-pointer mt-2"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>
        </div>

        <button className="btn btn-primary w-full mt-4" onClick={handleLogin}>
          Sign in
        </button>

        <div className="flex items-center my.jsx-4">
          <div className="border-t flex-grow"></div>
          <p className="mx-2 text-gray-500">or</p>
          <div className="border-t flex-grow"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="btn btn-outline btn-circle">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="btn btn-outline btn-circle">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="btn btn-outline btn-circle">
            <FaApple className="text-black" />
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <span 
            className="text-blue-600 cursor-pointer font-bold" 
            onClick={() => navigate("/register")}
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;