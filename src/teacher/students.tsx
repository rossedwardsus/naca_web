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

import axios from "axios"


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


class Classroom extends React.Component<any, any> {
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

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
      }

      axios.post("http://localhost:5000/api/teacher/1/students", {"hello": "there"}, {headers: headers})
        .then(res => {
          alert(JSON.stringify(res));
          console.log(res.data);
          //localStorage.setItem("user", JSON.stringify({session_token: res.data.status.session_token}));
          //redirect to homepage
          //alert(JSON.parse(localStorage.getItem("user")).session_token);
        }).catch((error) => {
          alert(error) //Logs a string: Error: Request failed with status code 404
        })


    this.setState({quiz: this.props.quiz});

  }

  componentDidUpdate = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));

  }

  handleChange = (e:any) => {

      //alert(e.target.value);

      this.setState({quiz_question_answer: e.target.value});

  }

  nextQuestion = () => {

      this.props.saveQuestionAnswer(this.state.answer);
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  render(){

    const {students, match, classes} = this.props;
    const {quiz} = this.state;
    return (
      <div>
          Search
          <br/>
           <TextField
                id="standard-name"
                label="Search Students"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal" />
          <br/>
          <br/>
          List of students and their scores/attendance
          <br/>
          {students.map((student: any) => <div>{student.student_first_name}</div>)}
          <br/>
          <br/>
          <Link to="/students/1">Student First Name Student Last Name</Link>
          <br/>
          <br/>
          <br/>
          <Link to="/teacher/student/add">Add Student</Link>
          <br/>
          <br/>
          <Link to="/teacher/group/add">Add Group</Link>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //alert("add " + JSON.stringify(ownProps.match.params.todo_id));
  //alert("add " + JSON.stringify(state.teacher.teacher));

  //let students = state.teacher.students
  return {
    //todo: {id:1, title: "title", description: "description"}
    //questions: [{question_id: 1, question_count: 1, question_user: "1", question_title: "i am stressed", question_datetime: "datetime"}]
    //quiz: state.quizes.quizes[0]
    students: state.teacher.teacher.students
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    nextQuestion: (previousQuestion: any) => {
      //dispatch(addTodo(title, description));
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Classroom)));

