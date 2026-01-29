import React from 'react';

function Employee({ name, role, onPromote }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      margin: '10px', 
      padding: '15px',
      borderRadius: '8px'
    }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <button 
        onClick={() => onPromote(name)}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle Promotion
      </button>
    </div>
  );
}

export default Employee;
