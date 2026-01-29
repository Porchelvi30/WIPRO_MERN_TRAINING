import { Link } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Login</Link> {" | "}
        <Link to="/employees">Employees</Link> {" | "}
        <Link to="/courses">Courses</Link> {" | "}
        <Link to="/admin">Admin</Link>
      </nav>

      <AnimatedRoutes />
    </>
  );
}

export default App;
