"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginUser, LoginResponse } from "../../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const mutation = useMutation<
    LoginResponse,
    Error,
    { email: string; password: string }
  >(loginUser, {
    onSuccess: (data: any) => {
      localStorage.setItem("token", data.token);
      router.push("/");
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1600x900/?login)",
        }}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={onSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            Login
          </h2>
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
              onChange={onChange}
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
              onChange={onChange}
              required
            />
          </div>
          <button
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
