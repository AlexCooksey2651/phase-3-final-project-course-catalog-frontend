import React from "react";

function DepartmentCourseList ({courses}) {
    let courseTitles = []
    courses.map(course => {
        courseTitles.push(course["title"])
    })
    const courseList = courseTitles.join(', ')

    return (
        <div>
            <br />
            <h2><b>Available Courses:</b></h2>
            <h3>{courseList}</h3>
        </div>
    )
}

export default DepartmentCourseList;