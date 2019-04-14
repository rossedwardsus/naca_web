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


class TakeQuiz extends React.Component<any, any> {
  //const { classes } = props;

  constructor(props: any){
    super(props);
    this.state = {
      quiz: {},
      current_question: 0
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

      alert(e.target.value);

  }

  nextQuestion = () => {

      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  render(){

    const {match, classes} = this.props;
    const {quiz} = this.state;
    return (
      <div>
          <FormControl>
          <FormLabel>{quiz.quiz_question}</FormLabel>    
          <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}
              >                
          <br/>
          {quiz.quiz_choices != undefined && quiz.quiz_choices.map((choice: any) => 
                                
                                  <FormControlLabel value="female" control={<Radio value="1" />} label={choice}/>
                                
                                )}
          <br/>
          </RadioGroup>
          </FormControl>
          <br/>
          <br/>
          I live in the same house as:
          <Radio></Radio>Real mom and Real dad
          <br/>
          <Radio></Radio>“Real” mom and “real” dad, but not TOGETHER (separated or divorced)
          <br/>
          <br/>
          <br/>
          <br/>
          <TextField
                id="standard-name"
                label="Email"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}/>

          <br/>
          <TextField
                id="standard-name"
                label="Password"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}/>
          <br/>
          <Button onClick={this.nextQuestion}>take Quiz</Button>
         
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(TakeQuiz)));

