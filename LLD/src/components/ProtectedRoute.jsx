import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  // Authentication logic should be here to follow Single Responsibility Principle
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
