import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import UserContext from "../UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      const response = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage("Success");
        setUser(data.data);
        navigate("/welcome");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return user ? (
    <Navigate to="/welcome" />
  ) : (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};
