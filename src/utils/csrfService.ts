const CSRF_TOKEN_KEY = "csrf_token";

// Simpan CSRF token ke localStorage
export const setCsrfToken = (token: string): void => {
  localStorage.setItem(CSRF_TOKEN_KEY, token);
};

// Ambil CSRF token dari localStorage
export const getCsrfToken = (): string | null => {
  return localStorage.getItem(CSRF_TOKEN_KEY);
};

// Hapus CSRF token dari localStorage
export const removeCsrfToken = (): void => {
  localStorage.removeItem(CSRF_TOKEN_KEY);
};
