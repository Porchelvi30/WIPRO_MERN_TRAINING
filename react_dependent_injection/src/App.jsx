import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { EmployeeService } from "./services/EmployeeService";
import { ServiceContext } from "./context/ServiceContext";

function App() {
  return (
    <ServiceContext.Provider value={EmployeeService}>
      <EmployeeList />
    </ServiceContext.Provider>
  );
}

export default App;
