import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export const UserHomepage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  if (!user) {
    navigate("/login");
  }

  const handleLogout = () => {
    fetch("/logout", { method: "POST" });
    navigate("/");
  };

  return (
    <div className="welcome-page">
      <h1>Welcome {user.FirstName}! This is your homepage</h1>

      <Notifications />
      <Link to="/" onClick={handleLogout} className="logout-button">
        Logout
      </Link>
    </div>
  );
};
