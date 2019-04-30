import uuidv4 from 'uuid/v4';
import { ADD_STUDENT_TO_GROUP, GET_CLASSROOM, ADD_STUDENT, ADD_GROUP } from './types';
import { push } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Dispatch } from 'redux';
import axios from 'axios';

//export interface Todo {

//  title: string;
//  description: string;
//}

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkResult<R> = ThunkAction<R, MyRootState, MyExtraArg, Action>;
// Next Line:
// It is important to use Action as last type argument, does not work with any.
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

const anotherThunkAction = (): MyThunkResult<Promise<boolean>> => (dispatch, getState) => {
  return Promise.resolve(true);
};

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IPayload {
  id: string;
  title: string;
  description: string
}

//export const addTodo = (title: any, description: any) => (alert())

export const getStudents = (classroom_id: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState()) + title + note_text);

  /*return(dispatch) => {
      axios.get(URL)
        .then((response) => {dispatch(GET_CLASSROOM(response));})
        .catch((response) => {return Promise.reject(response);});
    };*/

  dispatch({type: GET_CLASSROOM,
      payload: {
        answer: "answer"
      }
  })
});



export const addStudent = (first_name: any, last_name: any): any => ((dispatch: Dispatch, getState: any) => {
    //alert(list_id);

    //return (dispatch:any) => {
    //return new Promise((resolve, reject) => {
        dispatch({type: ADD_STUDENT,
            payload: {
              student_first_name: first_name,
              student_last_name: last_name
            }
        })

        //dispatch(push(url));

    //    resolve()
    //});
  //}
});

export const addGroup = (group_name: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  dispatch({type: ADD_GROUP,
      payload: {
        group_name: group_name
      }
  })
});

export const addStudentToGroup = (group_id: any, student_id: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  dispatch({type: ADD_STUDENT_TO_GROUP,
      payload: {
        group_id: group_id,
        student_id: student_id
      }
  })
});



