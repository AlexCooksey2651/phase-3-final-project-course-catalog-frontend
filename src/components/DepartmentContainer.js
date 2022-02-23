import React, { useState, useEffect } from "react";
import Department from "./Department";

function DepartmentContainer() {
    const [departments, setDepartments] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/departments')
            .then(response => response.json())
            .then(departments => setDepartments(departments))
    }, [])

    const departmentCards = departments.map(department => {
        return (
            <Department key={department.id} department={department} />
        )
    })
    
    return (
        <div id="departmentContainer">
            {departmentCards}
        </div>
    )
}

export default DepartmentContainer;