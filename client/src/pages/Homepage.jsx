import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome!</h1>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
