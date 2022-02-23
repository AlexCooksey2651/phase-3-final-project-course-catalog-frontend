import React from "react";

function Department ({ department }) {
    const { id, name, courses } = department
    
    let courseTitles = []
    courses.map(course => {
        courseTitles.push(course["title"])
    })
    let courseList = courseTitles.join(', ')
    return (
        <div className="departmentCard">
            <h2>{name}</h2>
            <div>
                <b>Courses:</b>
                <br/>
                {courseList}
            </div>
            
        </div>
    )
}

export default Department;