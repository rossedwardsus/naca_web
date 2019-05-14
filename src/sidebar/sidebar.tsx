import React from "react";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Sidebar = (props: any) => (
  <div>
    <br/>
    <Link to="/request_invite">Request Invite</Link>
    <br/>
    <br/>
    <br/>
    Choose a quiz:
    <br/>
    <Link to="/quiz">
      <Button variant="contained" color="primary">
          Quiz1
      </Button>
    </Link>
    <br/>
    <br/>
    <Link to="/teacher/student/tests/individual">Quiz2</Link>
    <br/>
    <br/>
    <Link to="/quiz">Create Class</Link>
    <br/>
    <br/>
    <Link to="/classrooms/1">Class 1</Link>
    <br/>
    <Link to="/classrooms/12">Class 12</Link>
    <br/>
    <br/>
    <br/>
    <Link to="/teacher/students">Students</Link>
    <br/>
    <Link to="/teacher/students/1">Student 1</Link>
    <br/>
    <Link to="/teacher/student/tests">Student Test</Link>
    <br/>
    <br/>
    <Link to="/teacher/students/groups">Groups</Link>
    <br/>
    <Link to="/teacher/student/tests/group">Create Group Test</Link>
    <br/>
    <br/>
    <Link to="/login">Login</Link>
     
  </div>
);

export default Sidebar