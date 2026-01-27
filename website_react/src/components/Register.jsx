import React from 'react';

const Register = ({ onRegister, onSwitchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration successful nu nenachu login panrom
    onRegister({ name: "New User", email: "new@happy.com" });
  };

  return (
    <div className="card auth-card">
      <div className="auth-header bg-secondary"> {/* Different header color for register */}
        <h3>Create Account</h3>
        <p className="mb-0">Join Happy Shopping Today</p>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input type="text" className="form-control py-2" placeholder="John Doe" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input type="email" className="form-control py-2" placeholder="name@example.com" required />
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold">Set Password</label>
            <input type="password" className="form-control py-2" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-accent-custom w-100 py-2 mb-3">REGISTER NOW</button>
        </form>
        <div className="text-center">
          <small>Already have an account? <button onClick={onSwitchToLogin} className="btn btn-link text-primary-custom fw-bold p-0">Login here</button></small>
        </div>
      </div>
    </div>
  );
};

export default Register;