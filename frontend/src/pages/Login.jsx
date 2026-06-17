import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand-content">
          <h1>Flamingo Healthcare CRM</h1>
          <p>
            Centralized Patient Management & Healthcare Operations Platform
          </p>

          <div className="feature-list">
            <div className="feature-item">
              ✓ Patient Management
            </div>

            <div className="feature-item">
              ✓ Appointment Scheduling
            </div>

            <div className="feature-item">
              ✓ WhatsApp Communication
            </div>

            <div className="feature-item">
              ✓ Analytics & Reports
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-header">
            <div className="logo-circle">
              FH
            </div>

            <h2>Welcome Back</h2>
            <p>Sign in to continue</p>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <div className="login-footer">
            Flamingo Healthcare Centre
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;