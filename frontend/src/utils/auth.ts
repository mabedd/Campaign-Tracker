import axios from "axios";
import { GetServerSidePropsContext } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const authHeader = () => {
  const token = getToken();
  if (token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  } else {
    return {};
  }
};
