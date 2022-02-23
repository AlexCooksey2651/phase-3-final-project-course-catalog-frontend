import React from "react";

function Course({ course }) {
    const { id, title, description, department } = course
    return (
        <div className="courseCard">
            <h2>{title}</h2>
            <h3>Department: {department["name"]}</h3>
            <p><em>Description: {description}</em></p>
        </div>
    );    
}

export default Course;