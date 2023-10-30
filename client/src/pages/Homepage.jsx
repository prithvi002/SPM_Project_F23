import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";

export const Homepage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome!</h1>

      <Notifications />

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
