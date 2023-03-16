import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (!user) {
    <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RequireAuth;
