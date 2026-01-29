import React, { useRef, useState } from 'react';

const RegistrationForm = () => {
  // useRef for all input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // useState for validation errors and submission status
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validateName = (name, field) => {
    if (!name.trim()) return `${field} is required`;
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return `${field} should contain only alphabets`;
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email format';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    
    if (!uppercaseRegex.test(password)) return 'Password must contain at least 1 uppercase letter';
    if (!lowercaseRegex.test(password)) return 'Password must contain at least 1 lowercase letter';
    if (!numberRegex.test(password)) return 'Password must contain at least 1 number';
    if (!specialCharRegex.test(password)) return 'Password must contain at least 1 special character';
    
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset previous states
    setErrors({});
    setSubmissionStatus('');

    // Get values from refs
    const firstName = firstNameRef.current?.value || '';
    const lastName = lastNameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    // Perform all validations
    const newErrors = {};

    const firstNameError = validateName(firstName, 'First Name');
    if (firstNameError) newErrors.firstName = firstNameError;

    const lastNameError = validateName(lastName, 'Last Name');
    if (lastNameError) newErrors.lastName = lastNameError;

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmissionStatus('Please fix the errors above');
      return;
    }

    // Form is valid - simulate API submission
    setSubmissionStatus('Registration successful! Welcome aboard! 🎉');
    
    // Clear form after successful submission
    if (firstNameRef.current) firstNameRef.current.value = '';
    if (lastNameRef.current) lastNameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            ref={firstNameRef}
            id="firstName"
            type="text"
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            ref={lastNameRef}
            id="lastName"
            type="text"
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>

      {submissionStatus && (
        <div className={`status-message ${submissionStatus.includes('successful') ? 'success' : 'error'}`}>
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
