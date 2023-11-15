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
  useNavigate,
} from "react-router-dom";
import "./App.css";
import UserContext from "./UserContext";
import { apiFetch } from "./api";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import DiscountCodes from "./pages/DiscountCodes";
function App() {
  const TRACKING_ID = "G-GMVY4B99CC"; // tracking id for GA
  ReactGA.initialize(TRACKING_ID);

  const [user, setUser] = React.useState(null);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Login",
    });

    (async () => {
      const response = await apiFetch("/users/check");
      if (response.status === 200) {
        const data = await response.json();
        setUser(data.data);
      } else {
        setUser(null);
      }
    })();
  }, [setUser]);

 /* useEffect(() => {
    (async () => {
      const response = await apiFetch("/couponcodes");
      if (response.status === 200) {
        const data = await response.json();
        setDiscountCodes(data);
      } else {
        setDiscountCodes(null);
      }
    })();
  }, [setDiscountCodes]);*/


  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
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
            <Route path="/search" element={<Search />} />
            <Route path="/discountcodes" element={<DiscountCodes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
