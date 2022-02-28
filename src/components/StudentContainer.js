import React, { useState, useEffect } from "react";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm";

function StudentContainer() {
    const [students, setStudents] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [selectedYear, setSelectedYear] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/students')
            .then(response => response.json())
            .then(students => setStudents(students))
    }, [])

    const filteredStudents = () => {
        if (selectedYear !== "") {
            const singleClass = students.filter(student => {
                return student.class_year === parseInt(selectedYear)
            })
            return singleClass
        } else {
            return students
        }
    }

    const searchedStudents = filteredStudents().filter(student => {
        if (student.first_name.toLowerCase().includes(searchText.toLowerCase()) || student.last_name.toLowerCase().includes(searchText.toLowerCase())) {
            return student
        }
    })

    const studentCards = () => {
        return searchedStudents.map(student => {
            return (
                <Student key={student.id} student={student} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} />
            )
        })
    }

    function showNewStudentForm() {
        return setShowForm(!showForm)
    }

    function handleNewStudent(newStudent) {
        console.log(newStudent)
        setStudents([...students, newStudent])
    }

    function onDeleteStudent(deletedId) {
        const remainingStudents = students.filter(student => {
            return student.id !== deletedId
        })
        setStudents(remainingStudents)
    }

    function onEditStudent(updatedStudent) {
        const updatedStudents = students.map(student => {
            if (student.id === updatedStudent.id) {
                return updatedStudent
            } else {
                return student
            }
        })
        setStudents(updatedStudents)
    }

    return (
        <div id="studentContainer">
            <div id="studentSearch">
                <label for="studentSearch">Search Student By Name:</label>
                <input type="text" placeholder="Enter Name Here" onChange={(event) => setSearchText(event.target.value)} />
            </div>
            <br />
            <br />
            <label className="classYearFilter">Select Class Year:</label>
            <select className="classYearFilter" name="class_year" onChange={e => setSelectedYear(e.target.value)}>
                <option value="">All</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br />
            <br />
            <button id="addStudentBtn" type="button" onClick={showNewStudentForm}>Add New Student</button>
            <br />
            {showForm ? <AddStudentForm handleNewStudent={handleNewStudent} /> : null}
            {students && studentCards()}
        </div>
    )
}

export default StudentContainer;