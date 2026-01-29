import React, { useState } from 'react';
import InventoryManagement from './Components/InventoryManagement';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        background: '#f8f9fa', 
        borderRadius: '8px' 
      }}>
        <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>🏢 Company Dashboard</h1>
        <button 
          onClick={() => setActiveTab('inventory')}
          style={{ 
            marginRight: '20px', 
            padding: '12px 24px', 
            background: activeTab === 'inventory' ? '#007bff' : '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          📦 Inventory
        </button>
        <button 
          onClick={() => setActiveTab('employees')}
          style={{ 
            padding: '12px 24px', 
            background: activeTab === 'employees' ? '#28a745' : '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          👥 Employees
        </button>
      </nav>

      {activeTab === 'inventory' && <InventoryManagement />}
      {activeTab === 'employees' && <EmployeeList />}
    </div>
  );
}

export default App;
