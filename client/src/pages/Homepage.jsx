import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../UserContext";

export const Homepage = () => {
  const { user } = useContext(UserContext);
  return user ? (
    <Navigate to="/welcome" />
  ) : (
    <div className="welcome-page">
      <h1>Welcome!</h1>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
