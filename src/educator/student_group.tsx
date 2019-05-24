import React from "react";
//import { match, RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles/';
import { withRouter } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {addStudentToGroup} from "../actions/teachers";

//interface Identifiable { todo_id: string, url: string; }

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200,
    height: 50
  },
  dense: {
    marginTop: 5,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});


class StudentGroup extends React.Component<any, any> {
  //const { classes } = props;

  constructor(props: any){
    super(props);
    this.state = {
      quiz: {},
      current_question: 0,
      quiz_question_answer: ""
    }
  }

  componentDidMount = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));

    this.setState({quiz: this.props.quiz});

  }

  componentDidUpdate = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));

  }

  handleChange = (e: any) => {

      //alert(e.target.value);

      this.setState({quiz_question_answer: e.target.value});

  }

  onStudentChange = (e: any) => {

      this.setState({student_id: e.target.value})

  }

  addStudentToGroup = () => {

      //this.props.addStudentToGroup(this.state.group_id, this.state.student_id);
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  render(){

    const {students, match, classes} = this.props;
    const {quiz} = this.state;
    return (
      <div>
          Group:
          <br/>
          <br/>
          Students in this group
          <br/>
          <Link to="/teachers/students/1">Student1</Link>
          <br/>
          {students.map((student: any) => <div>{student.student_id}</div>)}
          <br/>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Student1</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <br/>
          <br/>
          <Button onClick={this.addStudentToGroup}>Add Student</Button>
          <br/>
          <br/>
          Students in group who have taken Naca
          <br/>
          <Link to="/teachers/students/1/test/results">Student1</Link>
          <br/>
          Students attendance record
        </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //alert("add " + JSON.stringify(ownProps.match.params.todo_id));
  //alert("add " + JSON.stringify(state.teacher.teacher.students));
  //alert("add " + JSON.stringify(state.teacher.teacher.groups[0].students));

  let teachers_students = state.teacher.teacher.students;
  let students_in_group = state.teacher.teacher.groups[0].students;
  //let students_in_group_naca_taken = if student.naca_results.length > 0
  
  //filter through students and return students whos student id is in the list
  //use reselect
  //get students name[{id:1},{id:2},{id:3},{id:4}].findIndex(obj => obj.id == 3, 4, 5)
  let students = teachers_students.filter((student: any) => { 
        if (students_in_group.includes(student.student_id)){ 
            return student;
        }
  });

  let students_naca_taken = teachers_students.filter((student: any) => { 
        if (students.naca_results.length > 0){ 
            return student;
        }
  });

  //alert(JSON.stringify(students));
  alert(JSON.stringify(students_naca_taken));
  
  return {
    //todo: {id:1, title: "title", description: "description"}
    //questions: [{question_id: 1, question_count: 1, question_user: "1", question_title: "i am stressed", question_datetime: "datetime"}]
    //quiz: state.quizes.quizes[0]
    students: students
    //students_naca_taken: students_in_group_naca_taken
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addStudentToGroup: (group_id: any, student_id: any) => {
      dispatch(addStudentToGroup(group_id, student_id))
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(StudentGroup)));

