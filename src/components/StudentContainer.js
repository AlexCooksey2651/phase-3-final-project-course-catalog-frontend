import React, { useState, useEffect } from "react";
import Student from "./Student";

function StudentContainer() {
    const [students, setStudents] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/students')
            .then(response => response.json())
            .then(students => setStudents(students))
    }, [])

    const studentCards = students.map(student => {
        return (
            <Student key={student.id} student={student} />
        )
    })
    
    return (
        <div id="studentContainer">
            {studentCards}
        </div>
    )
}

export default StudentContainer;