import React, { useState } from "react";
import EditStudentForm from "./EditStudentForm";

function Student({ student, onDeleteStudent, onEditStudent }) {
    const { id, first_name, last_name, class_year, student_courses } = student
    const [isEditing, setIsEditing] = useState(false)

    function handleDeleteStudent() {
        fetch(`http://localhost:9292/students/${id}`, {
            method: "DELETE",
        })
        onDeleteStudent(id)
    }

    const coursesToRender = () => {
        
        if (student_courses.length > 0) {
            return student_courses.map(item => {
                return (
                    <li className="studentCourse">{item.course.title}
                    <br/>
                    Grade: {item.grade} %
                    </li>
                )
            })
        } else {
            return "This student has not enrolled in any courses yet."
        }
    }

    return (
        <div className="studentCard">
            <h2>Name: {first_name} {last_name}</h2>
            <h3>Class Year: {class_year}</h3>
            <div>
                <h4>Courses:</h4>
                <ul>
                    {coursesToRender()}
                </ul>
            </div>
            <button className="editStudentBtn" type="button" onClick={() => setIsEditing(!isEditing)}>{isEditing? "Done Editing" : "Edit Student Information"}</button>
            {isEditing && <EditStudentForm student={student} onEditStudent={onEditStudent}/>}
            <br/>
            <br/>
            <button className="deleteStudentBtn" type="button" onClick={handleDeleteStudent}>Delete Student</button>
        </div>
    )
}

export default Student;