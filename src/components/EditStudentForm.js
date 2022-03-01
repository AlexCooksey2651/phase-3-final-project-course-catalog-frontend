import React, { useState } from 'react'

function EditStudentForm({ student, onEditStudent }) {
  const { id, first_name, last_name, class_year, student_courses } = student
  const [firstName, setFirstName] = useState(first_name)
  const [lastName, setLastName] = useState(last_name)
  const [classYear, setClassYear] = useState(class_year)

  const body = {
    first_name: firstName,
    last_name: lastName,
    class_year: classYear
  }

  function handleEditStudent(event) {
    event.preventDefault()
    fetch(`http://localhost:9292/students/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then(response => response.json())
        .then(updatedStudent => onEditStudent(updatedStudent))
  }

  return (
    <form id="editStudentForm" onSubmit={handleEditStudent}>
        <label for="first_name">First Name:</label>
            <input required
                type="text"
                name="first_name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
        <br/>
        <label for="last_name">Last Name:</label>
            <input required
                type="text"
                name="last_name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
        <br/>
        <label for="class_year">Class Year:</label>    
            <select name="class_year" onChange={e => setClassYear(parseInt(e.target.value))}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
            </select>    
        <br/>
        <button className="updateStudentBtn" type="submit">Confirm Updates</button>
    </form>
  )
}

export default EditStudentForm;