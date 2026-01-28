import React, { useRef } from "react";

function JsonUncontrolledRegForm() {
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Value: " + usernameRef.current.value);
  };

  return (
    <div>
      <form>
        <input ref={usernameRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default JsonUncontrolledRegForm;