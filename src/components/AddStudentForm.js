import React, { useState } from 'react'

function AddStudentForm({ handleNewStudent }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [classYear, setClassYear] = useState("")

  const body = {
      first_name: firstName,
      last_name: lastName,
      class_year: classYear
  }

  function addNewStudent(event) {
      event.preventDefault()
        fetch("http://localhost:9292/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(newStudent => {
                handleNewStudent(newStudent);
                setFirstName("");
                setLastName("");
                setClassYear("")
            });
  }

  return (
    <form id="addStudentForm" onSubmit={addNewStudent}>
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
            <input required
                type="number"
                name="class_year"
                value={classYear}
                onChange={e => setClassYear(e.target.value)}
            />
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AddStudentForm;