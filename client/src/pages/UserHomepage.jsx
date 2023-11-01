import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";
import { useNavigate } from "react-router-dom";

export const UserHomepage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
      };
  return (
    <div className="welcome-page">
      <h1>Welcome Traveler! This is your homepage</h1>

      <Notifications />
      <Link to="/" onClick={handleLogout} className="logout-button">
          Logout
        </Link>
    </div>
  );
};
