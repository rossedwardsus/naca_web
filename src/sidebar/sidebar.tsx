import React from "react";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Sidebar = (props: any) => (
  <div>
    <br/>
    <br/>
    <u>Students</u>
    <br/>
    <Link to="/educator/students/1">Student 1</Link>
    <br/>
    <Link to="/educator/student/tests">Student Test</Link>
    <br/>
    <br/>
    <Link to="/educator/students/groups">Groups</Link>
    <br/>
    <Link to="/educator/student/tests/group">Create Group Test</Link>
    <br/>
    <br/>
    <Link to="/login">Login</Link>
     
  </div>
);

export default Sidebar