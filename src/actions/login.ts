import * as H from 'history';
import uuidv4 from 'uuid/v4';
import { GET_CLASSROOM, ADD_QUESTION_ANSWER, ADD_TODO, DELETE_TODO, ADD_TODO_TAG, ADD_NOTE, SEARCH_NOTE, UPDATE_NOTE } from './types';
//import { push } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import axios from 'axios';
//import { push,  browserHistory } from 'react-router-redux';


export const loginTeacher = (email: any, password: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  /*dispatch({type: ADD_TODO,
      payload: {
        email: email, 
        password: password
      }
  })*/

  //browserHistory.push('/teacher');
});


export const loginStudent = (email: any, password: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  /*dispatch({type: ADD_TODO,
      payload: {
        email: email, 
        password: password
      }
  })*/

  //browserHistory.push('/student/quiz');
});
