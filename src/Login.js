import { useState } from "react";
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'abcd@gmail.com' && password === '1234') {
            setLoggedIn(true);
            alert('Logged in successfully!');
        } else {
            setLoggedIn(false);
            alert('Invalid credentials');
        }
    };
    return (
        <div className="login-page">
            <div className="login-page-heading">
            <img src="../Images/IRCTC-Logo.png"></img>
            <h1>Welcome to IRCTC</h1>

            </div>

        <div className="login-container">
          <h2>Login</h2>
          {!loggedIn ? (
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label>Email Address:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Sign In</button>
            </form>
          ) : (
            <div>
              <p>You are logged in!</p>
              {/* Additional content for logged-in users */}
              {/* You can redirect or render other components here */}
            </div>
          )}
          <div className="register-link">
            <p>New User? <a href="/n">Register here</a></p>
          </div>
        </div>
        </div>

      );
    };
    
    export default Login;