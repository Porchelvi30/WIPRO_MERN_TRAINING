import React, { useRef } from "react";

function UncontrolledRegistrationForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Uncontrolled Form Submitted: " +
        nameRef.current.value +
        ", " +
        emailRef.current.value
    );
  };

  return (
    <div>
      <h2>Uncontrolled Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Enter Name" />

        <br /><br />

        <input type="email" ref={emailRef} placeholder="Enter Email" />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledRegistrationForm;


