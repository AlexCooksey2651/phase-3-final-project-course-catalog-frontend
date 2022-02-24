import React, { useState } from 'react'

function AddStudentForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [classYear, setClassYear] = useState("")

  function addNewStudent(event) {
      event.preventDefault()
      console.log('hello')
  }
  return (
    <form onSubmit={addNewStudent}>
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

export default AddStudentForm