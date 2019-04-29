import React from "react";
//import { History } from 'react-router';
import { BrowserRouter as Router, Route, Link, match, withRouter, Redirect, Switch } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Quiz from "./quiz/take_quiz";
import Login from "./auth/login";

//import RequestInvite from "./auth/request_account";
//import ApproveAccount from "./auth/approve_request";

import Classroom from "./classroom/classroom";
import TeacherStudents from "./teacher/students";
import TeacherStudent from "./teacher/student";
import TeacherStudentEdit from "./students/student_edit";
import TeacherStudentTests from "./teacher/student_tests";
import TeacherStudentTestResults from "./teacher/student_test_results";
import TeacherStudentAdd from "./teacher/student_add";
import TeacherGroupAdd from "./teacher/add_student_grouping";

//import compose from 'recompose/compose';
//import connect from 'redux';
import History from './history';
import * as H from 'history';


const styles = {
  root: {
    flexGrow: 1,
    bottom: 0,
 },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed' as 'fixed',
    bottom: 0,
  }
};




class Naca extends React.Component<any, any> {

  constructor(props: any) {
        super(props);
        //this.onLogout = this.onLogout.bind(this);

        this.state = {activeTab: 0, anchorEl: null, menuOpen: false};
  }

  //state = {activeTab: 0};

  //handleChange = (tab: any) => {
  //  alert(tab);
    //this.props.history.push(`/${tab}`);
    //<Redirect to='/todos' />
    //window.location.replace("/todos");
    //history.push('/todos');
  //}

  componentDidMount = () => {

    //alert(JSON.stringify(this.props));

  }

  handleChange = (event: any, value: any) => {
    //alert(value)
    this.setState({ activeTab: value });
  };

  handleMenu = (event: any) => {
    //alert("event.currentTarget");
    this.setState({ anchorEl: event.currentTarget });
    //this.setState({ menuOpen: true });
  };

  handleClose = () => {
    //alert("event.currentTargetclose");
    this.setState({ anchorEl: null });
    //this.setState({ menuOpen: false });
  };

  render() {

    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);
    //alert(open);

    return(<Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu} 
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
              <MenuItem onClick={this.handleClose}>link</MenuItem>
              <MenuItem onClick={this.handleClose} component={({innerRef, ...props}) => <Link {...props} to="/notes/add" />}>Add Note</MenuItem>
              <MenuItem onClick={this.handleClose}>Add Todo</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
            
            <Typography variant="h6" color="inherit">
              Naca
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={1} md={2} lg={4}>
                <br/>
                <Link to="/request_invite">Request Invite</Link>
                <br/>
                <br/>
                If not logged in as a
                <br/>
                teacher dont show this
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
                <Link to="/quiz">Quiz</Link>
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
                <Link to="/teacher/students/">Students</Link>
                <br/>
                <Link to="/teacher/students/1">Student 1</Link>
                <br/>
                <Link to="/teacher/student/tests">Student Test</Link>
                <br/>
                <br/>
                <Link to="/login">Login</Link>
              </Grid>
            <Grid item xs>
              <br/>
              <br/>
              <br/>
              <br/>
              <Switch>
                <Route exact path="/" component={Quiz} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/login" component={Login} />
                <Route path="/classrooms/:classroom_id" component={Classroom} />
                <Route exact path="/teacher/students" component={TeacherStudents} />
                <Route exact path="/teacher/student/add" component={TeacherStudentAdd} />
                <Route exact path="/teacher/student/tests" component={TeacherStudentTests} />
                <Route exact path="/teacher/group/add" component={TeacherGroupAdd} />
                <Route path="/teacher/students/:student_id/exam/:test_id/results" component={TeacherStudentTestResults} />
                <Route path="/teacher/students/:student_id" component={TeacherStudent} />
                <Route path="/teacher/students/:student_id/edit" component={TeacherStudentEdit} />
              </Switch>
              <br/>
            </Grid>
          </Grid>
        </div>
        
      </div>
    </Router>)
  };
}

//component={Link}
//        to="/signal"
//        label="signal"
//        value="signal"


export default withStyles(styles)(Naca);
