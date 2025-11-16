import React from "react";
import "./Login.css";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Music PLAYER</h1>

        <input className="login-input" type="text" placeholder="Username" />
        <input className="login-input" type="password" placeholder="Password" />

        {/* This button MUST trigger the login */}
        <button className="login-btn" onClick={onLogin}>
          GET STARTED
        </button>

        <p className="login-small">or Log-in using</p>

        <div className="login-social">🎵</div>
      </div>
    </div>
  );
}

export default Login;
