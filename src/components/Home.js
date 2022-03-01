import React from "react";

function Home() {
    return (
        <div id="home">
            <h1>Welcome to the Office of the Registrar!</h1>
            
            <p>Navigate to the <b>Students</b> page to view students currently enrolled at Pokemon Academy. You may view their names, class year, the courses they are enrolled in this semester, and their current grade in each course. If you wish, you can filter students by class year, or search students by name. You can also add or delete students from the Pokemon Academy database or edit current students' information if needed.</p>

            <p>Navigate to the <b>Courses</b> page to view available courses. For each course, you will see its name, a brief course description, which department it belongs to, and the number of students enrolled. Courses can be sorted by the course title, department, or number of students enrolled. Use the Edit Course form to revise the course description.</p>

            <p>Navigate to the <b>Departments</b> page to view all departments at Pokemon Academy. For every academic department at PA, you can click to toggle a display of all available courses.</p>

        </div>
    )
}

export default Home;