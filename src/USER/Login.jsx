import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [navigate]);

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function validate(data) {
    const errors = {};
    if (!data.email.includes("@") || !data.email.includes(".com")) {
      errors.email = "Enter a valid email address";
    }
    if (!data.password || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  }

  function submit(e) {
    e.preventDefault();
    const validationErrors = validate(Data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .get("http://localhost:3001/users")
        .then((res) => {
          const user = res.data.find(
            (u) => u.email === Data.email && u.password === Data.password
          );

          if (user && user.status === "active") {
            localStorage.setItem("user", JSON.stringify(user));
            if (user.role === "admin") {
              navigate("/admin/dashboard", { replace: true });
            } else {
              navigate("/", { replace: true });
            }
          } else {
            setErrors({ general: "Invalid Email or Password" });
          }
        })
        .catch((err) => {
          console.error("Login Error", err);
          setErrors({ general: "Something went wrong. Try again!" });
        });
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
          Login
        </h2>

        {errors.general && (
          <div className="bg-red-600 text-white p-2 rounded text-center mb-3">
            {errors.general}
          </div>
        )}

        <form onSubmit={submit} className="flex flex-col gap-4">
          <div>
            <label className="font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={Data.email}
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
              value={Data.password}
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
            Login
          </button>
        </form>

        <p className="text-gray-200 text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-300 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
