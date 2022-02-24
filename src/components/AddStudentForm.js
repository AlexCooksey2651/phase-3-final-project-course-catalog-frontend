import React, { useState } from 'react'

function AddStudentForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [classYear, setClassYear] = useState("")

  return (
    <form>
        <label>
            First Name:
            <br />
            <input required
                type="text"
                name="first_name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Last Name:
            <br />
            <input required
                type="text"
                name="last_name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Class Year:
            <br />
            <input required
                type="number"
                name="class_year"
                value={classYear}
                onChange={e => setClassYear(e.target.value)}
            />
        </label>
    </form>
  )
}

export default AddStudentForm