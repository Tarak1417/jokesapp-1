// src/Login.js
import React, { useState } from "react";
import "./index.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "me@1234" && password === "pass@1234") {
      onLogin(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <p>userName: me@1234</p>
        <p>userName: pass@1234</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;