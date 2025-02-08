const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

// Simpan access token ke localStorage
export const setAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

// Ambil access token dari localStorage
export const getToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

// Hapus access token dari localStorage
export const removeAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// Simpan refresh token ke localStorage
export const setRefreshToken = (token: string): void => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

// Ambil refresh token dari localStorage
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

// Hapus refresh token dari localStorage
export const removeRefreshToken = (): void => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// Hapus semua token (logout)
export const clearTokens = (): void => {
  removeAccessToken();
  removeRefreshToken();
};
