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
      quiz_question_answer: ""
    }
  }

  componentDidMount = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));

    this.setState({quiz: this.props.quiz});

    //this.props.getQuiz()

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

  /*<FormControl component={"fieldset" as "div"} className={classes.formControl}>
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
          </FormControl>*/
 
  
  render(){

    let divStyle = {

      width: "100%",
      height: "800px",
      backgroundImage: "url(\"https://agora-file-storage-prod.s3-us-west-1.amazonaws.com/workplace/attachment/9020367397063680311?response-content-disposition=inline%3B%20filename%3D%22QuizIntro.jpg%22%3B%20filename%2A%3Dutf-8%27%27QuizIntro.jpg&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIBfCLzUosNzsPpHmWbWxO1h7mQ9rEyUTH2rZdtiAicIwAiAX65oqXzmzjL%2BwHnuwVd8CUK5wEIWRfbkDHYGj8nyj1irjAwiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDczOTkzOTE3MzgxOSIMShX9zUSCPVCAnvo8KrcDWOZzb9rvf8sfJtDmlwPssbB1VAwW%2Ft6p7SPBkKN%2B0ffmfNoOKGtuD7%2B486JxbTucs1nAghmw3eXW3VxTprACbVF3TCxvyrwiL1bmhctxaocF7a2oHNhmD54WPMl%2FelSFYzu%2F2TlY8jj1vuZzRaUs1G1jMiHCO7bhlYr0ubbDnkfUuOesahgU3wkEAw%2FFXlPTjnl7pT%2BJjD5hQf4AB8VJgEr5mtUlm8GfPYdi39ZQcXb9NPiK7eUkwYuDcdLFOvgV5yqYJvqmY7nMhBT%2FIR%2FlJVUzO1ZKxsR0PwP88sNhrF6Yv4rZ8xXSAeHB5qLIQgDyzkK%2F8l9f3P%2FWm17uixihi32COa%2FtmQbx8LAurp4r1mWOGd7CzAuGa%2Fq%2FXlooS%2BJbILAMIGFohWo6gEaRyhtn6uLsm8Lb0RA3XssbYXvGm4r5RkcGQHbL9fZb6ssAy8750AQe9CwSO8n5DdstU61I6b8euaeOMu8xZmbTYAfjUf72vz78ngQ2J3w%2F7j3KyFYw2e0F%2Bp7VX9kJxexGn8xmN7bm7KbyTjDdpCwK3gUQg0K%2F1HMpr4N6EQrnRVvORTdQsmYSmIxrvjD56JHnBTq1AcTbDkS4eJAFtThIWwndm7yBNG300sdSmS1TPlLXmpZPQRi4EqsjWY%2Fga2E6EuSt%2F5gyfMzRMbnvNcp7lb%2FgW1R69NuJWjXmZlCNoc8rwtteZU3tV6bSjT3cab%2BcvH7SruyF304JT4fL6fCjKtuN58ZWoKeZeJCOAeegESDMOUfQ%2FtaYBi6eOv2jgPdP121LKm4LUGFSUWytAK1KvOY6pY%2FX1Qld3RblNFIsBDyz0e7LS0MKsus%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190521T230944Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW5WILNGZX7%2F20190521%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=a7fe853a5efcf40b8da6324299b9fe978bc54c8636756429c0a36d3972860438\")"

    }


    const {match, classes} = this.props;
    const {quiz} = this.state;
    return (
      <div style={divStyle}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button style={{ fontSize: '63px' }} onClick={this.nextQuestion}>Take Quiz</Button>
         
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

