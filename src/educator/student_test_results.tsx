import React from "react";
//import { match, RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles/';
import { withRouter } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


interface Identifiable { todo_id: string, url: string; }

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 0,
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
    paddingLeft: 0
  }
});


class StudentTestResults extends React.Component<any, any> {
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
          <Grid container spacing={24}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                  Test results
                  <br/>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                Exam Summary
                <br/>
                Naca Exam View Results 
                <br/>
                Suggested interventions
              </Grid>
              <br/>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              Question 1
              <br/>
              <br/>
              <Typography>
                I live in the same house
              </Typography>
              <TextField
                  id="outlined-multiline-static"
                  label="Text"
                  multiline
                  rows="4"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  
              />
          </Grid>
          <br/>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              <br/>
              Question 2 of 23
              <br/>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      value="checkedA"
                    />
                  }
                  label="I like visiting my extended family (grandparents, aunts, uncles, cousins, etc)"
                />
              </FormGroup>
              <TextField
                  id="outlined-multiline-static"
                  label="Text"
                  multiline
                  rows="4"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
              />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              <br/>
              <br/>
              Question 2B of 23
              <br/>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      value="checkedA"
                    />
                  }
                  label="I do not visit them because:"
                />
              </FormGroup>
              <br/>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            Question 3 of 23
            <br/>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      value="checkedA"
                    />
                  }
                  label="My parents/guardians come to school events like parties, assemblies, field trips, etc)"
                />
            </FormGroup>
            <br/>
            <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(StudentTestResults)));

