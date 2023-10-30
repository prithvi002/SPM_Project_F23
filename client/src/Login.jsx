import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>

      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};
