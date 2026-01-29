import React from 'react';
import './App.css';

function App() {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setStatus('');

    const firstName = firstNameRef.current?.value || '';
    const lastName = lastNameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'First Name required';
    else if (!/^[a-zA-Z\s]+$/.test(firstName.trim())) newErrors.firstName = 'Only alphabets';

    if (!lastName.trim()) newErrors.lastName = 'Last Name required';
    else if (!/^[a-zA-Z\s]+$/.test(lastName.trim())) newErrors.lastName = 'Only alphabets';

    if (!email.trim()) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) newErrors.email = 'Invalid email';

    if (!password) newErrors.password = 'Password required';
    else if (password.length < 8) newErrors.password = 'Min 8 chars';
    else if (!/[A-Z]/.test(password)) newErrors.password = '1 Uppercase';
    else if (!/[a-z]/.test(password)) newErrors.password = '1 Lowercase';
    else if (!/\d/.test(password)) newErrors.password = '1 Number';
    else if (!/[!@#$%^&*]/.test(password)) newErrors.password = '1 Special char';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus('Please fix errors above');
      return;
    }

    setStatus('✅ Registration Successful!');
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <h1 className="form-title">Registration Form</h1>
        
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name *</label>
            <input
              ref={firstNameRef}
              className={`form-input ${errors.firstName ? 'error' : ''}`}
              type="text"
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Last Name *</label>
            <input
              ref={lastNameRef}
              className={`form-input ${errors.lastName ? 'error' : ''}`}
              type="text"
            />
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              ref={emailRef}
              className={`form-input ${errors.email ? 'error' : ''}`}
              type="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <input
              ref={passwordRef}
              className={`form-input ${errors.password ? 'error' : ''}`}
              type="password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button className="submit-btn" type="submit">
            Register
          </button>
        </form>

        {status && (
          <div className={`status-message ${status.includes('Success') ? 'success' : 'error'}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
