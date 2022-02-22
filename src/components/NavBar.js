import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div id="navBar">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/students" exact>
          Students
        </NavLink>
        <NavLink to="/courses" exact>
          Courses
        </NavLink>
        <NavLink to="/departments" exact>
          Departments
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;