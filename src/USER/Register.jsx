import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    status: "active",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const API = "http://localhost:3001";

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required";
    if (!values.email.includes("@gmail.com"))
      errors.email = "Enter a valid Gmail address";
    if (!values.password || values.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    return errors;
  }

  async function submit(e) {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await axios.get(`${API}/users?email=${data.email}`);
      if (res.data.length > 0) {
        alert("User already exists with this email!");
        return;
      }

      await axios.post(`${API}/users`, data);

      alert("Registration Successful!");
      setData({ name: "", email: "", password: "" });
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Register Error:", err);
      alert("Something went wrong. Try again!");
    }
  }

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
  
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/I/81kvOSiyX4L.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative z-10 w-96 p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Register
        </h2>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <div>
            <label className="font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-3 py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-gray-200 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
