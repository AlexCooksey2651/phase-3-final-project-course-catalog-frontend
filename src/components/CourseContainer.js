import React, { useState, useEffect } from "react";
import Course from "./Course";

function CourseContainer() {
    const [courses, setCourses] = useState([])
    const [deptOrder, setDeptOrder] = useState(true)
    
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
        const sortedCourses = [...courses].sort((a, b) => {
            let deptA = a.department.name
            let deptB = b.department.name
            if (deptOrder === true) {
                if (deptA < deptB) {
                    return -1
                } else if (deptA > deptB) {
                    return 1
                }
                return 0
            } else if (deptOrder === false) {
                if (deptA < deptB) {
                    return 1
                } else if (deptA > deptB) {
                    return -1
                }
                return 0
            }
        })
        setDeptOrder(!deptOrder)
        setCourses(sortedCourses)
    }
    
    return (
        <div id="courseContainer">
            <button id="deptSort" onClick={sortByDepartment}>Sort By Department</button>
            {courseCards}
        </div>
    )
}

export default CourseContainer;