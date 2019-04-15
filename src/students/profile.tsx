import React from "react";
//import { match, RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles/';
import { withRouter } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Identifiable { todo_id: string, url: string; }

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


class Profile extends React.Component<any, any> {
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
  onFirstNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

      //alert(e.target.value);

  }

  render(){

    const {match, classes} = this.props;
    return (
      <div>
          Profile
          <br/>
          i am a parent/student/organization/venue
          <br/>
          location
          <br/>
          organization type
          <br/>

          <TextField
                id="standard-name"
                label="First Name"
                className={classes.textField}
                value={this.state.email}
                margin="normal"
                onChange={this.onFirstNameChange}/>
            <br/>
            <b>{match.params.todo_id}</b>
            <br/>
           <TextField
                id="standard-name"
                label="Last Name"
                className={classes.textField}
                value={this.state.password}
                margin="normal"
                onChange={this.onFirstNameChange}/>
            <br/>
            <br/>
            <TextField
                id="standard-name"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                margin="normal"
                onChange={this.onFirstNameChange}/>
            <br/>
            <TextField
              id="standard-name"
              label="About Me"
              className={classes.textField}
              value={this.state.description}
              margin="normal"
              multiline={true}
              onChange={this.onFirstNameChange}
            />
            <br/>
            <Button>Login</Button>
          <br/>
      </div>
    );
  }
}

const mapStateToProps = (state:any, ownProps: any) => {
  //alert("add " + JSON.stringify(ownProps.match.params.todo_id));
  //alert("add " + JSON.stringify(state));
  return {
    //todo: {id:1, title: "title", description: "description"}
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    onAddTodo: (title: any, description: any) => {
      //dispatch(addTodo(title, description));
    }
  };
};

//export default Todo;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Profile)));

