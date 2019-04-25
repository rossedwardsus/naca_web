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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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


class Student extends React.Component<any, any> {
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
              <Grid item xs={6} sm={6} md={6} lg={6}>
                  Jason Angelo
                  <br/>
                  Severity: Tier 1
                  <br/>
                  Grade Level: 4
                  <br/>
                  Teacher: Smith
                  <br/>
                  <br/>
                  Counselor: Benedict Alder
                  <br/>
                  Gender: Male
                  <br/>
                  Race: Caucasion
                  <br/>
                  Age: 10
                  <br/>
                  City: Morgantown
                  <br/>
                  State: West Virginia
                  <br/>
                  Attendance: 90% or higher
                  <br/>
                  <br/>
                  <Link to="/teacher/students/1/edit">
                      <Button variant="contained" color="primary">
                          Edit Student
                      </Button>
                  </Link>
                  <br/>
                  <br/>
                  <br/>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            Exam Summary
            <br/>
            Naca Exam View Results 
            <br/>
            <List>
                <ListItem>
                  <ListItemText primary="#vent"></ListItemText>
                </ListItem>
                <ListItem component={({innerRef,...props}) => <Link {...props} to="/student/1/exam/1/results">Here</Link>}></ListItem>
            </List>
            <br/>
            Suggested interventions
            <br/>
            <br/>
            This student is Tier i
          </Grid>
          <br/>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              Tier IV
              <br/>
              <br/>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Intensive academic supports and progress monitoring (Student Assistance Teams, I.E.P.s, and 504 plans)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Intensive social skills training"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Functional Behavior Assessments (FBA) leading to Individualized Behavior Intervention Plans (BIP)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Multi-Agency collaboration for wrap-around services (mental health, Child Protective Services, physicians, etc)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Outside counseling interventions- i.e. Cognitive Behavioral Therapy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Parent collaboration and skill building"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Alternatives to suspensions and expulsions- change of placement"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Community and Service Learning Projects"
                />
              </FormGroup>
          </Grid>
          <br/>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              <br/>
              Tier III
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Intensive academic supports and progress monitoring (Student Assistance Teams, I.E.P.s, and 504 plans)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Intensive social skills and mindfulness training"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Functional Behavior Assessments (FBA) leading to Individualized Behavior Intervention Plans (BIP)"
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Parent collaboration and skill building"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Alternatives to out-of-school suspensions"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Referrals to outside counseling services"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Community and Service Learning Projects"
                />
              </FormGroup>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              <br/>
              <br/>
              Tier II
              <br/>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Increased academic supports and progress monitoring"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Focused social skills training and mindfulness training"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Referrals for Restorative Justice/Restorative Circles"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Check-in/Check-out with Daily Progress Reports"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Parent collaboration and skill building"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Alternatives to out-of-school suspensions"
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Community and Service Learning Projects"
                />
              </FormGroup>
              <br/>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
              <br/>
              <br/>
              Tier I
              <br/>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Standards-based academics"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="School-wide evidence-based social/emotional learning"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="3-5 easy to understand school behavior expectations"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Effective classroom management"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Active supervision and monitoring by staff"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Community and service-learning projects"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="Increased academic supports and progress monitoring"
                    />
                  }
                  label="Leadership opportunities"
                />
              </FormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Student)));

