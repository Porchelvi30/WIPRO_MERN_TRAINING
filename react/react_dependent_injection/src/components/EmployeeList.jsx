import { useEmployeeService } from "../hooks/useEmployeeService";

function EmployeeList() {
  const service = useEmployeeService();
  const employees = service.fetchEmployees();

  return (
    <div>
      <h3>Employees Hook DI</h3>
      {employees.map((e) => (
        <p key={e}>{e}</p>
      ))}
    </div>
  );
}

export default EmployeeList;
