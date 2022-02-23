import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import StudentContainer from "./StudentContainer";
import CourseContainer from "./CourseContainer";
import DepartmentContainer from "./DepartmentContainer";
import Home from "./Home";

function App() {
  return (
      <div className = "App" >
          <Header />
          <NavBar />
          <Switch >
            <Route exact path="/students">
              <StudentContainer />
            </Route>
            <Route exact path="/courses">
              <CourseContainer />
            </Route>
            <Route exact path="/departments">
              <DepartmentContainer />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
