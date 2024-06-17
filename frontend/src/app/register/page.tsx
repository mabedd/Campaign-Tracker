"use client";

import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1600x900/?charity)",
        }}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            Register
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
