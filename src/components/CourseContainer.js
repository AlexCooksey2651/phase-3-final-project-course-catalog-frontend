import React, { useState, useEffect } from "react";
import Course from "./Course";

function CourseContainer() {
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/courses')
            .then(response => response.json())
            .then(courses => setCourses(courses))
    }, [])

    const courseCards = courses.map(course => {
        return (
            <Course key={course.id} course={course} />
        )
    })
    
    return (
        <div id="courseContainer">
            {courseCards}
        </div>
    )
}

export default CourseContainer;