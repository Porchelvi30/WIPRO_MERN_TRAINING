import withAuth from "../HOC/withAuth";
import Employee from "./Employee";
import Admin from "./Admin";
import Courses from "./Courses";

export const ProtectedEmployeePage = withAuth(Employee);
export const ProtectedAdminPage = withAuth(Admin);
export const ProtectedCoursesPage = withAuth(Courses);
