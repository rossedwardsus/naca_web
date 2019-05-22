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

import QuizTake from "./quiz/quiz_take";
import QuizIntro from "./quiz/quiz_intro";

import Login from "./auth/login";
import Signup from "./auth/signup";

import Home from "./home/home";

//import RequestInvite from "./auth/request_account";
//import ApproveAccount from "./auth/approve_request";

import Classroom from "./classroom/classroom";
import TeacherHomepage from "./teacher/teacher_homepage";
import TeacherStudents from "./teacher/students";
import TeacherStudent from "./teacher/student";
import TeacherStudentEdit from "./students/student_edit";
import TeacherStudentTests from "./teacher/student_tests";
import TeacherStudentTestResults from "./teacher/student_test_results";
import TeacherStudentAdd from "./teacher/student_add";
import TeacherGroupAdd from "./teacher/add_student_grouping";
import GroupTestAdd from "./teacher/group_test_add";
import TeacherStudentsGroups from "./teacher/student_groups";
import TeacherStudentsGroup from "./teacher/student_group";
import TakeQuiz from "./teacher/take_quiz";

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
  appbar: {
    alignItems: 'center',
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
              <Switch>
                <Route path="/teacher/students/groups/:group_id" component={TeacherStudentsGroup} />
                <Route exact path="/" component={Home} />
                <Route exact path="/quiz/intro" component={QuizIntro} />
                <Route exact path="/quiz/take" component={QuizTake} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/classrooms/:classroom_id" component={Classroom} />
                <Route exact path="/teacher" component={TeacherHomepage} />
                <Route exact path="/teacher/students" component={TeacherStudents} />
                <Route exact path="/teacher/students/groups" component={TeacherStudentsGroups} />
                <Route exact path="/teacher/student/add" component={TeacherStudentAdd} />
                <Route exact path="/teacher/student/tests" component={TeacherStudentTests} />
                <Route exact path="/teacher/student/tests/individual" component={TakeQuiz} />
                <Route exact path="/teacher/student/tests/group" component={GroupTestAdd} />
                <Route exact path="/teacher/group/add" component={TeacherGroupAdd} />
                <Route path="/teacher/students/:student_id/exam/:test_id/results" component={TeacherStudentTestResults} />
                <Route path="/teacher/students/:student_id" component={TeacherStudent} />
                <Route path="/teacher/students/:student_id/edit" component={TeacherStudentEdit} />
              </Switch>
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
