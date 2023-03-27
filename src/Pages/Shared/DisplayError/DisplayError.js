import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch(e => console.log(e));
    toast.success("User Logged out Successfully!");
  };

  return (
    <div className="text-center my-20">
      <p>Something Went wrong!!</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please{" "}
        <button className="btn btn-warning btn-outline" onClick={handleLogout}>
          Sign Out
        </button>{" "}
        and Log Back In
      </h4>
    </div>
  );
};

export default DisplayError;
