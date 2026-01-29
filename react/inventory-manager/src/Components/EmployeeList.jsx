import React, { useState } from 'react';
import Employee from './Employee';

const employees = [
  { id: 1, name: "Ravi", role: "Junior Developer" },
  { id: 2, name: "Priya", role: "Senior Developer" },
  { id: 3, name: "Amit", role: "Junior Developer" }
];

function EmployeeList() {
  const [promoted, setPromoted] = useState([]);

  const promote = (name) => {
    if (promoted.includes(name)) {
      setPromoted(promoted.filter(e => e !== name));
      alert(`🔄 ${name} demoted!`);
    } else {
      setPromoted([...promoted, name]);
      alert(`🎉 ${name} got promoted!`);
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      {promoted.length > 0 && <h2>Promoted: {promoted.join(', ')}</h2>}
      <div className="list">
        {employees.map(emp => (
          <Employee key={emp.id} name={emp.name} role={emp.role} onPromote={promote} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
