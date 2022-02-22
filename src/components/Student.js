import React from "react";

function Student({ student }) {
    const { id, first_name, last_name, class_year, courses, grades }
    return (
        <div className="studentCard">
            <h3>{first_name} {last_name}</h3>
            <h4>{class_year}</h4>
        </div>
    )
}

export default Student;