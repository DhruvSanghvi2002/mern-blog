import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log("Updated Form Data:", formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending Form Data:", formData);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Dashboard />
      <div className="h-screen mx-auto max-w-5xl p-6 flex justify-between items-center">
        <div className="w-1/2">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg text-white">
              Dhruv's
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-2">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                id="username"
                type="text"
                required
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                id="email"
                type="text"
                required
                placeholder="name@company.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                id="password"
                type="password"
                required
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="Submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
