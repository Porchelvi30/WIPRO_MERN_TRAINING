import { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import { addEmployee } from "../actions/EmployeeActions";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setEmployees([...employeeStore.getAllEmployees()]);

    const updateUI = () => {
      setEmployees([...employeeStore.getAllEmployees()]);
    };

    employeeStore.addChangeListener(updateUI);

    return () => {
      employeeStore.removeChangeListener(updateUI);
    };
  }, []);

  const handleAdd = () => {
    if (name.trim() === "") return;
    addEmployee(name);
    setName("");
  };

  return (
    <div>
      <h3>Employee List</h3>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleAdd}>Add Employee</button>
      </div>

      <hr />

      <div className="employee-list">
        {employees.length === 0 ? (
          <p>No employees added</p>
        ) : (
          employees.map((emp, index) => <p key={index}>{emp}</p>)
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
