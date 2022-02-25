import React, { useState } from "react";
import EditCourseForm from "./EditCourseForm"

function Course({ course, onEditCourse }) {
    const { id, title, description, department, student_courses } = course
    const [isEditing, setIsEditing] = useState(false)
    const studentsEnrolled = student_courses.length

    return (
        <div className="courseCard">
            <h2>{title}</h2>
            <h3>Department: {department["name"]}</h3>
            <p>Students Enrolled: {studentsEnrolled}</p>
            <p><em>Description: {description}</em></p>
            <button className="editCourseBtn" type="button" onClick={() => setIsEditing(!isEditing)}>{isEditing? "Done Editing" : "Edit Course Description"}</button>
            {isEditing? <EditCourseForm course={course} onEditCourse={onEditCourse}/> : null}
        </div>
    );    
}

export default Course;