import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle the login process
  const handleLogin = async () => {
    try {
      // Make the POST request to the backend for login
      const response = await axios.post("http://localhost:8080/user/login", {
        username,
        password,
      });

      // If the response is successful, navigate to the dashboard
      if (response.status === 200) {
        navigate("/dashboard");
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

        <div className="flex items-center my-4">
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