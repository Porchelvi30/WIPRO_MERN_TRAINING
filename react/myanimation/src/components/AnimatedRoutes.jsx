import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import {
  ProtectedEmployeePage,
  ProtectedAdminPage,
  ProtectedCoursesPage
} from "../pages/ProtectedPages";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employees" element={<ProtectedEmployeePage />} />
      <Route path="/admin" element={<ProtectedAdminPage />} />
      <Route path="/courses" element={<ProtectedCoursesPage />} />
    </Routes>
  );
}

export default AnimatedRoutes;
