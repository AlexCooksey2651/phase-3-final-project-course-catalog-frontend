import React, { useState } from "react";
import EditStudentForm from "./EditStudentForm";

function Student({ student }) {
    const { id, first_name, last_name, class_year, student_courses } = student
    const [isEditing, setIsEditing] = useState(false)
    
    function showEditStudentForm(event) {
        console.log(event.target.parentNode)
        setIsEditing(!isEditing)
    }

    function handleDeleteStudent(event) {
        console.log(event.target.parentNode)
    }

    return (
        <div className="studentCard">
            <h2>Name: {first_name} {last_name}</h2>
            <h3>Class Year: {class_year}</h3>
            <div>
                <h4>Courses:</h4>
                <ul>
                    <li>
                        {student_courses[0]["course"]["title"]}, 
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
            <button className="editStudentBtn" type="button" onClick={showEditStudentForm}>{isEditing? "Done Editing" : "Edit Student Information"}</button>
            {isEditing? <EditStudentForm student={student}/> : null}
            <br/>
            <br/>
            <button className="deleteStudentBtn" type="button" onClick={handleDeleteStudent}>Delete Student</button>
        </div>
    )
}

export default Student;