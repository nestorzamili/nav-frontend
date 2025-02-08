import axiosInstance from "../utils/axiosInstance";
import { LoginCredentials, TokenResponse } from "../types/authTypes";

export const login = async (
  credentials: LoginCredentials
): Promise<TokenResponse> => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};

export const refreshToken = async (): Promise<TokenResponse> => {
  const response = await axiosInstance.post("/auth/refresh-token");
  return response.data;
};
