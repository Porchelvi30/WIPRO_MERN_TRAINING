import React, { useState } from 'react';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addItem = () => {
    if (name && quantity) {
      setItems([...items, { id: Date.now(), name, quantity: Number(quantity) }]);
      setName('');
      setQuantity('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📦 Inventory Management</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px', padding: '10px', width: '200px' }}
        />
        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ marginRight: '10px', padding: '10px', width: '100px' }}
          type="number"
        />
        <button 
          onClick={addItem}
          style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          ➕ Add Item
        </button>
      </div>

      <div>
        <h3>Current Inventory ({items.length} items):</h3>
        {items.length === 0 ? (
          <p>No items in inventory</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '10px', 
                border: '1px solid #ddd', 
                marginBottom: '5px',
                borderRadius: '5px'
              }}>
                <span>{item.name} - Qty: {item.quantity}</span>
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ 
                    background: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  🗑️ Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InventoryManagement;
