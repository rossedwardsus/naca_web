import React from "react";
//import { match, RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles/';
import { withRouter } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
});


class Signup extends React.Component<any, any> {
  //const { classes } = props;

  constructor(props: any){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount = () => {

    //alert(JSON.stringify(this.props));
    //alert(this.props.match.params.list_id);
    //alert(JSON.stringify(this.props));

  }
  onFirstNameChange = () => {

      //alert(e.target.value);

  }

  onEmailChange = () => {

      //alert(e.target.value);

  }

  onPasswordChange = () => {

      //alert(e.target.value);

  }

  render(){

    const {questions, match, classes} = this.props;
    return (
      <div>
          <TextField
                id="standard-name"
                label="First Name"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onEmailChange}/>

          <br/>
          <TextField
                id="standard-name"
                label="Last Name"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onPasswordChange}/>
          <br/>
           <TextField
                id="standard-name"
                label="School Name"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onEmailChange}/>

          <br/>
          <TextField
                id="standard-name"
                label="District"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onPasswordChange}/>
          <br/>
          <TextField
                id="standard-name"
                label="Email"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onEmailChange}/>

          <br/>
          <TextField
                id="standard-name"
                label="Password"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onPasswordChange}/>
          <br/>
          <TextField
                id="standard-name"
                label="Password Again"
                className={classes.textField}
                value={this.state.dicussion_text}
                margin="normal"
                multiline={true}
                onChange={this.onPasswordChange}/>
          <br/>

          <Button>Signup</Button>
          <br/>
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
    questions: state.questions.questions
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddTodo: (title: any, description: any) => {
      //dispatch(addTodo(title, description));
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Signup)));

