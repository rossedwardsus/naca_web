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
          <Button>Login</Button>
          <br/>
          <br/>
          Tier IV
          <br/>
          Intensive academic supports and progress monitoring (Student Assistance Teams, I.E.P.s, and 504 plans)
          <br/>
          Intensive social skills training
          <br/>
          Functional Behavior Assessments (FBA) leading to Individualized Behavior Intervention Plans (BIP)
          <br/>
          Multi-Agency collaboration for wrap-around services (mental health, Child Protective Services, physicians, etc)
          <br/>
          Outside counseling interventions- i.e. Cognitive Behavioral Therapy
          <br/>
          Parent collaboration and skill building
          <br/>
          Alternatives to suspensions and expulsions- change of placement
          <br/>
          Community and Service Learning Projects
          <br/>
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

