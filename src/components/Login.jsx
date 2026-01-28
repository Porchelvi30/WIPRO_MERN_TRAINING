import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      
      onLoginSuccess({ email }); 
    }
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-lg border-0">
        <div className="login-header text-center text-white p-4">
          <h2 className="fw-bold mb-0">Welcome Back! ✨</h2>
          <p className="small opacity-75 mb-0">Login to Happy Shopping</p>
        </div>
        
        <div className="card-body p-4 p-md-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-bold text-dark">Email Address</label>
              <input 
                type="email" 
                className="form-control custom-input" 
                placeholder="mohan145nerkai@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-bold text-dark">Password</label>
              <input 
                type="password" 
                className="form-control custom-input" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-login-submit w-100 py-3 fw-bold shadow-sm mb-4">
              SECURE LOGIN 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;