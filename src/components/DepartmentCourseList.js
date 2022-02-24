import React from "react";

function DepartmentCourseList ({courses}) {
    let courseTitles = []
    courses.map(course => {
        courseTitles.push(course["title"])
    })
    const courseList = courseTitles.join(', ')

    return (
        <div>
            <b>Available Courses:</b>
            <br/>
            {courseList}
        </div>
    )
}

export default DepartmentCourseList;