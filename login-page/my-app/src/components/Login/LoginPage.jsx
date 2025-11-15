import React, { useState } from "react";
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const validEmails = [
    "test@email.com",
    "test1@email.com",
    "test2@email.com",
    "test3@email.com"
  ]

  const validatePassword = () => {
     // Check length between 8 and 16
    if (password.length < 8 || password.length > 16) {
      return { valid: false, message: "Password must be 8-16 characters long." };
    }

    // Regex for each requirement
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>_\-\\[\]\/~`+=;]/.test(password);

    if (!hasUppercase) {
      return { valid: false, message: "Password must contain at least one uppercase letter." };
    }
    if (!hasLowercase) {
      return { valid: false, message: "Password must contain at least one lowercase letter." };
    }
    if (!hasNumber) {
      return { valid: false, message: "Password must contain at least one number." };
    }
    if (!hasSymbol) {
      return { valid: false, message: "Password must contain at least one symbol." };
    }

    // All checks passed
    return { valid: true, message: "Password is valid." };
  }

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const validPassword = validatePassword(password) // Validate password

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (validEmails.indexOf(email)) {
      setError(email + " is not a valid email")
      return;
    }

    if (!validPassword.valid) {
      setError(validPassword.message)
      return;
    }

    setSuccess("Welcome, " + email)
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setSuccess(""); // Set success to empty to redirect user to login form
  }

  return (
    <div className="login-wrapper">

      <div className="login-container" role="main">
        {success? <h2>Login Successful!</h2> : <h2>Login</h2>}
        {error && <div className="error" role="alert">{error}</div>}
        
        {success && <div className="success" role="alert">{success}</div>}
        {success && <a onClick={handleLogout} className="logout">Log out </a>}
        {!success && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-login">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}