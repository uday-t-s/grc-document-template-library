import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
} from "../services/apiService";

function AuthPage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all required fields");
      return;
    }

    if (!isLogin && !formData.name) {
      alert("Name is required");
      return;
    }

    try {
  if (isLogin) {
    await loginUser(formData);
  } else {
    await registerUser(formData);
  }

  localStorage.setItem(
    "isAuthenticated",
    "true"
  );

  setIsAuthenticated(true);

  navigate("/templates");
} catch (error) {
  console.log(error);

  alert("Backend not connected yet");
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Signup"}
        </h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 w-full mb-4 rounded-lg"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 w-full mb-4 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 w-full mb-6 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-lg"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-2"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;