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
            return students.filter(student => {
                console.log(student.class_year)
                console.log(selectedYear)
                return student.class_year === selectedYear
            })
        }
        return students
    }

    const searchedStudents = students.filter(student => {
        if (student.first_name.toLowerCase().includes(searchText) || student.last_name.toLowerCase().includes(searchText)) {
            return student
        }
    })
    
    const studentCards = searchedStudents.map(student => {
        return (
            <Student key={student.id} student={student} />
        )
    })

    function showNewStudentForm() {
        return setShowForm(!showForm)
    }

    return (
        <div id="studentContainer">
            <div id="studentSearch">
                <label for="studentSearch">Search Student By Name:</label>
                <input type="text" placeholder="Enter Name Here" onChange={(event) => setSearchText(event.target.value)}/>
            </div>
            <br />
            <br />
            <label className="classYearFilter">Select Class Year:</label>
            <select className="classYearFilter" name="class_year" onChange={e => setSelectedYear(e.target.value)}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br/>
            <br/>
            <button id="addStudentBtn" type="button" onClick={showNewStudentForm}>Add New Student</button>
            <br/>
            {showForm ? <AddStudentForm /> : null }
            {studentCards}
        </div>
    )
}

export default StudentContainer;