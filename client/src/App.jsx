import React, { useEffect } from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Homepage } from "./pages/Homepage";
import { UserHomepage } from "./pages/UserHomepage";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./App.css";

function App() {
  const TRACKING_ID = "G-GMVY4B99CC"; // tracking id for GA
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Login",
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <img
            className="homepage-logo"
            alt="Infinity Travel Logo"
            referrerPolicy="no-referrer"
            src={process.env.PUBLIC_URL + "/infinity-travel-logo.png"}
            height="80px"
            width="120px"
          />
        </Link>

        <Outlet />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/welcome" element={<UserHomepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
