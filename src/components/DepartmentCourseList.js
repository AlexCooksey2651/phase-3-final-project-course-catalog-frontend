import React from "react";

function DepartmentCourseList ({courses}) {
    let courseTitles = []
    courses.map(course => {
        courseTitles.push(course["title"])
    })
    const courseList = courseTitles.join(', ')

    return (
        <div className="courseList">
            <br />
            <h2><b>Available Courses:</b></h2>
            <h4>{courseList}</h4>
        </div>
    )
}

export default DepartmentCourseList;