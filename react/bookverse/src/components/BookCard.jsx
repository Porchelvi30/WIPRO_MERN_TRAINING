import React from 'react';

const BookCard = ({ title, author, price, style }) => {
  const baseStyle = {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    background: 'white',
    margin: '10px'
  };

  const combinedStyle = { ...baseStyle, ...style };

  return (
    <div style={combinedStyle}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{title}</h3>
      <p style={{ margin: '0 0 8px 0', color: '#666', fontStyle: 'italic' }}>
        By {author}
      </p>
      <p style={{ 
        margin: 0, 
        fontSize: '18px', 
        fontWeight: 'bold', 
        color: '#e74c3c' 
      }}>
        ${price}
      </p>
    </div>
  );
};

export default BookCard;
