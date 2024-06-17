import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface LoginResponse {
  token: string;
}

export const loginUser = async (formData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", formData);
  return response.data;
};

export const fetchCampaigns = async () => {
  const response = await api.get("/campaigns");
  return response.data;
};
