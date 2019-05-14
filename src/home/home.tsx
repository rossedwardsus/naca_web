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

  studentTakeQuiz = () => {

      this.props.history.push("/quiz");
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  teacherLogin = () => {

      this.props.history.push("/teacher");
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  render(){

    const {match, classes} = this.props;
    const {quiz} = this.state;
    return (
      <div>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={1} md={2} lg={4}>
                
              </Grid>
              <Grid item xs>
                  Student Take Quiz
                  <br/>
                  <br/>
                  <TextField
                        id="standard-name"
                        label="Email"
                        className={classes.textField}
                        value={this.state.dicussion_text}
                        margin="normal"/>

                  <br/>
                  <TextField
                        id="standard-name"
                        label="Password"
                        className={classes.textField}
                        value={this.state.dicussion_text}
                        margin="normal"/>
                  <br/>
                  <TextField
                        id="standard-name"
                        label="Quiz Number"
                        className={classes.textField}
                        value={this.state.dicussion_text}
                        margin="normal"/>
                  <br/>
                  <Button onClick={this.studentTakeQuiz}>Student Take Quiz</Button>
                  <br/>
                  <br/>
              </Grid>
              <Grid item xs>
                  <br/>
                  Teacher Login
                  <br/>
                  <br/>
                  <TextField
                        id="standard-name"
                        label="Email"
                        className={classes.textField}
                        value={this.state.dicussion_text}
                        margin="normal" />

                  <br/>
                  <TextField
                        id="standard-name"
                        label="Password"
                        className={classes.textField}
                        value={this.state.dicussion_text}
                        margin="normal"/>
                  <br/>
                  <Button onClick={this.teacherLogin}>Teacher Login</Button>
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
    quiz: state.quizes.quizes[0]
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

