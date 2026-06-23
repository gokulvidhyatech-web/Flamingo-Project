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
      <div className="overlay"></div>

      <div className="floating floating-1"></div>
      <div className="floating floating-2"></div>
      <div className="floating floating-3"></div>

      <div className="login-card">
        <div className="logo-circle">
          FH
        </div>

        <h1>Flamingo Healthcare</h1>
        <p>Patient Engagement CRM Platform</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Sign In
          </button>
        </form>

        <div className="footer-text">
          Flamingo Healthcare Centre • Ambattur, Chennai
        </div>
      </div>
    </div>
  );
}

export default Login;