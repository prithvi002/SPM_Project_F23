import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";

export const Homepage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome!</h1>

      <Notifications />

    </div>
  );
};
