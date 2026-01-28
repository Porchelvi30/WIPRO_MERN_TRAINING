import "./App.css";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  return (
    <div className="app-container">
      <h2>Employee Data</h2>
      <div className="employee-box">
        <EmployeeList />
      </div>
    </div>
  );
}
