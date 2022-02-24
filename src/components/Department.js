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
            <button onClick={() => setShowCourseList(!showCourseList)}>Show Course List</button>
            {showCourseList ? <CourseList courses={courses} /> : null}
            {/* <div>
                <b>Courses:</b>
                <br/>
                {showCourseList ? courseList : null }
            </div>  */}
        </div>
    )
}

export default Department;