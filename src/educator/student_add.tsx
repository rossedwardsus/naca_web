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
import Grid from '@material-ui/core/Grid';


import {addStudent} from "../actions/teachers";

import axios from "axios";


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


class StudentAdd extends React.Component<any, any> {
  //const { classes } = props;

  constructor(props: any){
    super(props);
    this.state = {
      quiz: {},
      current_question: 0,
      quiz_question_answer: "",
      student_first_name: "",
      student_last_name: "",
      gender: "",
      birth_gender: "",
      state: "",
      race: "",
      grade: ""
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
  onFirstNameChange = (e: any) => {

      this.setState({student_first_name: e.target.value})

  }

  onLastNameChange = (e: any) => {

      this.setState({student_last_name: e.target.value})

  }

  onAgeChange = (e: any) => {

      this.setState({student_age: e.target.value})

  }

  onGenderChange = (e: any) => {

      this.setState({student_gender: e.target.value})

  }

  onBirthGenderChange = (e: any) => {

      this.setState({student_birth_gender: e.target.value})

  }

  onStateChange = (e: any) => {

      this.setState({student_state: e.target.value})

  }

  onRaceChange = (e: any) => {

      this.setState({student_race: e.target.value})

  }

  onGradeChange = (e: any) => {

      this.setState({student_grade: e.target.value})

  }

  handleChange = (e:any) => {

      //alert(e.target.value);

      this.setState({quiz_question_answer: e.target.value});

  }

  addStudent = () => {

      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
      }

      axios.post("http://localhost:5000/api/teacher/1/students/add", {first_name: 1, last_name: 2, age: "age", grade_level: "grade", gender: "g", birth_gender: "true_false", dob: "dob", race: "race", state: "state"  }, {headers: headers})
        .then(res => {
          alert(JSON.stringify(res));
          console.log(res.data);
          //localStorage.setItem("user", JSON.stringify({session_token: res.data.status.session_token}));
          //redirect to homepage
          //alert(JSON.parse(localStorage.getItem("user")).session_token);
        }).catch((error) => {
          alert(error) //Logs a string: Error: Request failed with status code 404
        })


      //this.props.addStudent(this.state.student_first_name, this.state.student_last_name);
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 
      //this.props.history.push("/teacher/students");

  }

  render(){

    const {match, classes} = this.props;
    const {quiz} = this.state;
    return (
         <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={1} md={6} lg={6}>   
                <br/>
                Add student1
                <br/>
                <br/>
                <br/>
                <br/>
                <TextField
                      id="standard-name"
                      label="First Name"
                      className={classes.textField}
                      value={this.state.student_first_name}
                      onChange={this.onFirstNameChange}
                      margin="normal"/>

                <br/>
                <TextField
                      id="standard-name"
                      label="Last Name"
                      className={classes.textField}
                      value={this.state.student_last_name}
                      onChange={this.onLastNameChange}
                      margin="normal"/>

                <br/>
                <TextField
                      id="standard-name"
                      label="Grade Level"
                      className={classes.textField}
                      value={this.state.dicussion_text}
                      onChange={this.onGradeChange}
                      margin="normal"/>
                <br/>
                <TextField
                      id="standard-name"
                      label="Gender"
                      className={classes.textField}
                      value={this.state.dicussion_text}
                      onChange={this.onGenderChange}
                      margin="normal"/>
                <br/>
                <br/>
                Is this the student’s gender at birth?
                <br/>
              </Grid>
              <Grid item xs={12} sm={1} md={6} lg={6}>   
                <br/>
                <TextField
                      id="standard-name"
                      label="Race"
                      className={classes.textField}
                      value={this.state.dicussion_text}
                      onChange={this.onBirthGenderChange}
                      margin="normal"
                      multiline={true}/>
                <br/>
                <br/>
                <TextField
                      id="standard-name"
                      label="Age"
                      className={classes.textField}
                      value={this.state.dicussion_text}
                      onChange={this.onAgeChange}
                      margin="normal"
                      multiline={true}/>
                <br/>
                <br/>
                <TextField
                      id="standard-name"
                      label="State"
                      className={classes.textField}
                      value={this.state.dicussion_text}
                      margin="normal"
                      multiline={true}/>
                <br/>
                <br/>
                <Button onClick={this.addStudent}>Add Student</Button>
                <br/>
              </Grid>
            </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //alert("add " + JSON.stringify(ownProps.match.params.todo_id));
  //alert("add " + JSON.stringify(state));
  return {
    //todo: {id:1, title: "title", description: "description"}
    //questions: [{question_id: 1, question_count: 1, question_user: "1", question_title: "i am stressed", question_datetime: "datetime"}]
    //quiz: state.quizes.quizes[0]
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addStudent: (first_name: any, last_name: any) => {
      dispatch(addStudent(first_name, last_name));
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(StudentAdd)));
