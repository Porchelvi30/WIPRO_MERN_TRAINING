import { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(() => console.log("Backend problem"));
  }, []);

  return (
    <div>
      <h2>Course List from Backend</h2>
      {courses.map((course) => (
        <p key={course.id}>{course.name}</p>
      ))}
    </div>
  );
}

export default CourseList;
