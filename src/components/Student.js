import React from "react";

function Student({ student }) {
    const { id, first_name, last_name, class_year, student_courses } = student
    
    function handleDeleteStudent(event) {
        console.log(event.target.parentNode)
    }

    return (
        <div className="studentCard">
            <h3>Name: {first_name} {last_name}</h3>
            <h4>Class Year: {class_year}</h4>
            <div>
                <p>Courses:</p>
                <ul>
                    <li>
                        {student_courses[0]["course"]["title"]}
                        <br />
                        Grade: {student_courses[0]["grade"]} %
                    </li>
                    <br />
                    <li>
                        {student_courses[1]["course"]["title"]}
                        <br />
                        Grade: {student_courses[1]["grade"]} %
                    </li>
                    <br />
                    <li>
                        {student_courses[2]["course"]["title"]}
                        <br />
                        Grade: {student_courses[2]["grade"]} %
                    </li>
                    <br />
                    <li>
                        {student_courses[3]["course"]["title"]}
                        <br />
                        Grade: {student_courses[3]["grade"]} %
                    </li>
                </ul>
            </div>
            <button type="button" onClick={handleDeleteStudent}>Delete Student</button>
        </div>
    )
}

export default Student;