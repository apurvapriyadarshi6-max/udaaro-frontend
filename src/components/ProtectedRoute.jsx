import { Navigate } from "react-router-dom";

function isTokenExpired(token) {
  try {
    if (!token) return true;

    const parts = token.split(".");
    if (parts.length !== 3) return true;

    const payload = JSON.parse(atob(parts[1]));

    if (!payload.exp) return true;

    const expiryTime = payload.exp * 1000; // convert to ms
    return Date.now() >= expiryTime;
  } catch (error) {
    return true;
  }
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedRoute;