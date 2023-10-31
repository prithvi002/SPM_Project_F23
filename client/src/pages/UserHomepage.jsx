import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";

export const UserHomepage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome Traveler! This is your homepage</h1>

      <Notifications />

    </div>
  );
};
