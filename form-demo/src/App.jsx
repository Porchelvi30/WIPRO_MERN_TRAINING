import CourseList from "./components/CourseList";
import ControlledRegistrationForm from "./components/ControlledRegistrationForm";
import UncontrolledRegistrationForm from "./components/UncontrolledRegistrationForm";

function App() {
  return (
    <>
      <CourseList />
      <ControlledRegistrationForm />
      <UncontrolledRegistrationForm />
    </>
  );
}

export default App;