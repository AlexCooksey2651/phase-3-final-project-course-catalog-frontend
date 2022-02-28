import React, { useState } from 'react';

function EditCourseForm({ course, onEditCourse })  {
    const [formData, setFormData] = useState(course)

    function handleChange(event) {
        const description = event.target.name
        setFormData({
            ...formData,
            [description]: event.target.value
        })
    }

    function handleEditCourse(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/courses/${course.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(updatedCourse => {
                console.log(updatedCourse)
                onEditCourse(updatedCourse)
            })
    }

    return (
        <form id="editCourseForm" onSubmit={handleEditCourse}>
        <label for="description">Course Description:</label>
            <input required
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
        <br/>
        <br/>
        <button className="updateStudentBtn" type="submit">Confirm Updates</button>
    </form>
    )
}

export default EditCourseForm; 