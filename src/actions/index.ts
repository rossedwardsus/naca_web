import uuidv4 from 'uuid/v4';
import { ADD_TODO, DELETE_TODO, ADD_TODO_TAG, ADD_NOTE, SEARCH_NOTE } from './types';
import { push } from 'connected-react-router';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Dispatch } from 'redux';

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

export const login = (email: any, password: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  dispatch({type: ADD_TODO,
      payload: {
        email: email, 
        password: password
      }
  })
});


