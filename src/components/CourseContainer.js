import React, { useState, useEffect } from "react";
import Course from "./Course";

function CourseContainer() {
    const [courses, setCourses] = useState([])
    const [deptOrder, setDeptOrder] = useState(true)
    const [nameOrder, setNameOrder] = useState(true)
    const [numOrder, setNumOrder] = useState(true)

    useEffect(() => {
        fetch('http://localhost:9292/courses')
            .then(response => response.json())
            .then(courses => setCourses(courses))
    }, [])

    const courseCards = () => {
        return courses.map(course => {
            return (
                <Course key={course.id} course={course} onEditCourse={onEditCourse} />
            )
        })
    }

    function onEditCourse(updatedCourse) {
        const updatedCourses = courses.map(course => {
            if (course.id === updatedCourse.id) {
                return updatedCourse
            } else {
                return course
            }
        })
        setCourses(updatedCourses)
    }

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

    function sortByName() {
        const sortedCourses = [...courses].sort((a, b) => {
            let nameA = a.title
            let nameB = b.title
            if (nameOrder === true) {
                if (nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                }
                return 0
            } else if (nameOrder === false) {
                if (nameA < nameB) {
                    return 1
                } else if (nameA > nameB) {
                    return -1
                }
                return 0
            }
        })
        setNameOrder(!nameOrder)
        setCourses(sortedCourses)
    }

    function sortByEnrollment() {
        const sortedCourses = [...courses].sort((a, b) => {
            let numA = a.student_courses.length
            let numB = b.student_courses.length
            if (numOrder === true) {
                if (numA < numB) {
                    return -1
                } else if (numA > numB) {
                    return 1
                }
                return 0
            } else if (numOrder === false) {
                if (numA < numB) {
                    return 1
                } else if (numA > numB) {
                    return -1
                }
                return 0
            }
        })
        setNumOrder(!numOrder)
        setCourses(sortedCourses)
    }

    return (
        <div id="courseContainer">
            <button id="titleSortBtn" onClick={sortByName}>Sort By Name</button>
            <button id="deptSortBtn" onClick={sortByDepartment}>Sort By Department</button>
            <button id="enrollmentSortBtn" onClick={sortByEnrollment}>Sort By Popularity</button>
            {courseCards()}
        </div>
    )
}

export default CourseContainer;