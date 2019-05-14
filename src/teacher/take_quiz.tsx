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

import axios from 'axios';


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
      current_question: 0,
      quiz_question_answer: "",
      question_text: "",
      question_type: "",
      question_count: 0,
      answers: []
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

    axios.post("http://localhost:5000/api/quiz/0868ce24-78fa-44af-ba43-3b3a40cc70e5/questions/1", { }, {headers: headers})
        .then(res => {
          //alert(JSON.stringify(res.data.question));
          alert(JSON.stringify(res.data.answers));
          
          console.log(res.data);
          this.setState({question_type: res.data.question.quiz_question_type});
          this.setState({question_count: res.data.question.question_count});
          this.setState({answers: res.data.answers})  

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

      alert(e.target.value);

      this.setState({quiz_question_answer: e.target.value});

  }

  handleAnswerResponse = (e:any) => {

      alert(e.target.value);

      //this.setState({quiz_question_answer: e.target.value});

  }

  saveResponse = () => {

      //save and get next question 

      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
      }

      axios.post("http://localhost:5000/api/quiz/0868ce24-78fa-44af-ba43-3b3a40cc70e5/questions/1/response", {student_id: 1, quiz_question_response: "response" }, {headers: headers})
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


      //this.props.saveQuestionAnswer(this.state.answer);
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }

  render(){

    const {match, classes} = this.props;
    const {quiz, question_type, answers} = this.state;
    return (
      <div>
          <FormControl component={"fieldset" as "div"} className={classes.formControl}>
          <FormLabel component={"legend" as "menu"}>{quiz.quiz_question}</FormLabel>    
          <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={this.state.quiz_question_answer}
                onChange={this.handleChange}
              >                
          <br/>
          {quiz.quiz_choices != undefined && quiz.quiz_choices.map((choice: any) => 
                                
                                  <FormControlLabel value="female" control={<Radio value="1" />} label={choice.text}/>
                                
                                )}
          <br/>
          </RadioGroup>
          </FormControl>
          <br/>
          {question_type == "yes_no" ? <div><div>yes</div><div>no</div></div> : <div>{answers.map((answer: any) => <div><RadioGroup aria-label="Gender" name="gender1" value={this.state.quiz_question_answer} onChange={this.handleChange}><FormControlLabel value="female" control={<Radio value={answer.quiz_question_answer_number} />} label={answer.quiz_question_answer_text}/>hello{answer.quiz_question_answer_text}</RadioGroup></div>)}multiple choice</div>}
          <br/>
          <Button onClick={this.saveResponse}>take Quiz</Button>
         
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //alert("add " + JSON.stringify(ownProps.match.params.todo_id));
  //alert("add " + JSON.stringify(state.quizes.quizes));
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

