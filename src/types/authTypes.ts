export interface User {
  userId: string;
  role: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface JwtPayload {
  userId: string;
  role: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}
