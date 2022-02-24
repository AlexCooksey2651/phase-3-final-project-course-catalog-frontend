import React, { useState, useEffect } from "react";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm";

function StudentContainer() {
    const [students, setStudents] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [searchText, setSearchText] = useState("")
    // const [selectedYear, setSelectedYear] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/students')
            .then(response => response.json())
            .then(students => setStudents(students))
    }, [])

    
    // const displayedStudents = students.filter(student => {
    //     if (student.class_year === selectedYear) {
    //         return student
    //     }
    // })

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
        console.log('hello')
        return setShowForm(!showForm)
    }

    return (
        <div id="studentContainer">
            <div id="studentSearch">
                <label for="studentSearch">Search Student By Name:</label>
                <input type="text" onChange={(event) => setSearchText(event.target.value)}/>
            </div>
            <br />
            <br />
            {/* <label for="class_year">Select Class Year:</label>
            <select name="class_year" id="class_year_filter" onChange={e => setSelectedYear(e.target.value)}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select> */}
            <button type="button" onClick={showNewStudentForm}>Add New Student</button>
            {showForm ? <AddStudentForm /> : null }
            {studentCards}
        </div>
    )
}

export default StudentContainer;