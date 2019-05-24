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

import {getQuiz} from '../actions/quiz';

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
      quiz_question_text: "",
      quiz_question_answer: 0,
      quiz_choices: []
    }
  }

  componentDidMount = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));


      axios.get("http://naca-api-alpha-dev.herokuapp.com/api/quiz/1/start", {  })
              .then(res => {
                //alert(JSON.stringify(res.data));
                //console.log(res.data);
                this.setState({quiz_question_text: res.data.question.quiz_question_text});
                this.setState({quiz_choices: res.data.answers})
              });
                


    //this.setState({quiz: this.props.quiz});

    //this.props.getQuiz()

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

  nextQuestion = () => {

      axios.post("http://naca-api-alpha-dev.herokuapp.com/api/quiz/1/response/1", {  })
        .then(res => {
          //alert(JSON.stringify(res.data));
          //console.log(res.data);
          this.setState({quiz_question_text: res.data.question.quiz_question_text});
          this.setState({quiz_choices: res.data.answers})
        });


      //this.props.saveQuestionAnswer(this.state.answer);
      //alert(e.target.value);
      //this.props.nextQuestion(this.state.current_question + 1)
      ///this.state.question == 

  }


  
  render(){

   
    const {match, classes} = this.props;
    const {quiz_question_text, quiz_choices, quiz_question_answer} = this.state;
    return (
      <div>
        <FormControl component={"fieldset" as "div"} className={classes.formControl}>
          <FormLabel component={"legend" as "menu"}>{quiz_question_text}</FormLabel>    
          <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={"" + quiz_question_answer}
                onChange={this.handleChange}
              >                
          <br/>
          {quiz_choices != undefined && quiz_choices.map((choice: any) => 
                                
                <FormControlLabel value={"" + choice.quiz_question_answer_number} control={<Radio />} label={choice.quiz_question_answer_text}/>
                                
          )}
          <br/>
          </RadioGroup>
          <br/>
        </FormControl> 
        <br/>
        <Button onClick={this.nextQuestion}>Next Question</Button>
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
    },
    getQuiz: () => {
      //dispatch(getQuiz());
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(TakeQuiz)));

