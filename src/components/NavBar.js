import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "15px",
  margin: "0 20px 6px",
  borderRadius: "2%",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
    return (
      <div id="navBar">
        <NavLink 
          to="/" exact 
          style={linkStyles}
          activeStyle={{background: "antiquewhite",}}
        >
          Home
        </NavLink>
        <NavLink 
          to="/students" exact
          style={linkStyles}
          activeStyle={{background: "antiquewhite",}}
        >
          Students
        </NavLink>
        <NavLink 
          to="/courses" exact
          style={linkStyles}
          activeStyle={{background: "white",}}
        >
          Courses
        </NavLink>
        <NavLink 
          to="/departments" exact
          style={linkStyles}
          activeStyle={{background: "antiquewhite",}}
        >
          Departments
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;