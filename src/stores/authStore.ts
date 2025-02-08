import { create } from "zustand";
import { User, JwtPayload } from "../types/authTypes";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  login: (
    accessToken: string,
    refreshToken: string,
    rememberMe?: boolean
  ) => void;
  logout: () => void;
}

const parseJwt = (token: string): JwtPayload => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const payload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(payload);
};

const initializeAuth = () => {
  const rememberMe = localStorage.getItem("rememberMe");
  const storage = rememberMe === "true" ? localStorage : sessionStorage;

  const accessToken = storage.getItem("access_token");
  const refreshToken = storage.getItem("refresh_token");

  if (accessToken) {
    try {
      const payload = parseJwt(accessToken);
      const user: User = {
        userId: payload.userId,
        role: payload.role,
        name: payload.name,
        email: payload.email,
      };

      return {
        user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      };
    } catch {
      storage.removeItem("access_token");
      storage.removeItem("refresh_token");
    }
  }

  return {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  };
};

const useAuthStore = create<AuthState>((set) => ({
  ...initializeAuth(),
  login: (accessToken, refreshToken, rememberMe = false) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    const payload = parseJwt(accessToken);

    const user: User = {
      userId: payload.userId,
      role: payload.role,
      name: payload.name,
      email: payload.email,
    };

    // Store auth data
    storage.setItem("access_token", accessToken);
    storage.setItem("refresh_token", refreshToken);

    // Set remember me preference
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    set({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: true,
    });
  },
  logout: () => {
    // Clear both storage types
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("rememberMe");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");

    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;
