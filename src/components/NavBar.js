import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "15px",
  margin: "6px 20px 6px",
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
          <b>HOME</b>
        </NavLink>
        <NavLink 
          to="/students" exact
          style={linkStyles}
          activeStyle={{background: "antiquewhite",}}
        >
          <b>STUDENTS</b>
        </NavLink>
        <NavLink 
          to="/courses" exact
          style={linkStyles}
          activeStyle={{background: "white",}}
        >
          <b>COURSES</b>
        </NavLink>
        <NavLink 
          to="/departments" exact
          style={linkStyles}
          activeStyle={{background: "antiquewhite",}}
        >
          <b>DEPARTMENTS</b>
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;