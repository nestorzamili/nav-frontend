import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/authStore";

const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Jika sudah terautentikasi, redirect ke halaman utama
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
