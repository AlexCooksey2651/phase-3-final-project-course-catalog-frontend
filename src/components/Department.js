import React, { useState } from "react";
import CourseList from "./DepartmentCourseList"

function Department ({ department }) {
    const { id, name, courses } = department
    const [showCourseList, setShowCourseList] = useState(false)
    
    let courseTitles = []
    courses.map(course => {
        courseTitles.push(course["title"])
    })
    const courseList = courseTitles.join(', ')

    return (
        <div className="departmentCard">
            <h1>{name}</h1>
            <button className="showCoursesBtn" onClick={() => setShowCourseList(!showCourseList)}>Show Course List</button>
            {showCourseList ? <CourseList courses={courses} /> : null}
        </div>
    )
}

export default Department;