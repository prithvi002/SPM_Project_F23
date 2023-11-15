import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Notifications from "../components/Notifications";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { apiFetch } from "../api";

export const UserHomepage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await apiFetch("/logout", { method: "POST" });
    setUser(null);

    navigate("/");
  };

  return !user ? (
    <Navigate to="/" />
  ) : (
    <div className="welcome-page">
      <h1>Welcome {user.FirstName}! This is your homepage</h1>

      <Notifications />

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <Link to="/search" className="link-btn">
        Search
      </Link>
        {user.UserRole==='admin' && <Link to="/discountcodes" className="link-btn">
            Provide Coupon codes
        </Link>}
        <Link to="/contact" className="link-btn">
            Contact Us!
        </Link>
    </div>
  );
};
