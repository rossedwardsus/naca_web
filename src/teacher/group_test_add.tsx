import React from "react";
//import { match, RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles/';
import { withRouter, Link } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Grid from '@material-ui/core/Grid';


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
  grid: {
    paddingLeft: 10
  }
});


class GroupTestAdd extends React.Component<any, any> {
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

  handleChange = (name: any) => (e: any) => {


  } 

  render(){

    const {match, classes} = this.props;
    return (
      <div>
          <Grid container spacing={24} className={classes.grid}>
              <Grid item xs={2} sm={2} md={2} lg={2}>
               
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <br/>
                Grade Level
                <br/>
                teacher
                <br/>
                test password-yes/no
                <br/>
                <br/>
                <TextField
                  id="standard-name"
                  label="Test code"
                  className={classes.textField}
                  value={this.state.dicussion_text}
                  margin="normal"/>
                <br/>
                <Button>Start test</Button>
              </Grid>
              
          </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(GroupTestAdd)));

