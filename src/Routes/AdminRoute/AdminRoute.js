import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user && isAdmin) {
    return children;
  }
};

export default AdminRoute;
