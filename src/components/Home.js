import React from "react";

function Home() {
    return (
        <div id="home">
            <h2>Welcome to the Office of the Registrar at Pokemon Academy!</h2>
            <p>Navigate to the <b>Students</b> page to view students currently enrolled at PA. You'll be able to see their names, class year, the courses they are enrolled in for this semester, and their current grade in each course. If you wish, you can filter students by class year, or sort students alphabetically by last name. You can also add new student information if a new student has joined Pokemon Academy.</p>
            <p>Navigate to the <b>Courses</b> page to view available courses. For each course, you will see its name, a brief course description, which department it belongs to, and the number of students enrolled. Courses can be sorted by the course title, department, or number of students enrolled. Use the Edit Course form to add new course information.</p>
            <p>Navigate to the <b>Departments</b> page to view all departments at PA. For every academic department at PA, you can click to view all available courses. Feel free to use the search bar to view departments individually.</p>
        </div>
        
    )
}

export default Home;