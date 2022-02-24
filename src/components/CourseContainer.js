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

    function sortByDepartment() {
        console.log('hello')
        const sortedCourses = [...courses].sort((a, b) => {
            let deptA = a.department.name
            let deptB = b.department.name
            if (deptA < deptB) {
                return -1
            } else if (deptA > deptB) {
                return 1
            }
            return 0
        })
        setCourses(sortedCourses)
    }
    
    return (
        <div id="courseContainer">
            <button onClick={sortByDepartment}>Sort By Department</button>
            {courseCards}
        </div>
    )
}

export default CourseContainer;