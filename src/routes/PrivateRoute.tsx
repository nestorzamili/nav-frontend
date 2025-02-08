import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/authStore";

const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Jika tidak terautentikasi, redirect ke halaman login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
