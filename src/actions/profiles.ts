import uuidv4 from 'uuid/v4';
import { ADD_TODO, DELETE_TODO, ADD_TODO_TAG, ADD_NOTE, SEARCH_NOTE, UPDATE_NOTE } from './types';
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

export const addNote = (note_id: any, title: any, note_text: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState()) + title + note_text);

  dispatch({type: ADD_NOTE,
      payload: {
        note_id: note_id,
        note_title: title,
        note_text: note_text
      }
  })
});

export const deleteTodo = (id: any) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});


export const updateNote = (note_id: string, note_title: string, note_text: string): any => ((dispatch: Dispatch, getState: any) => {
    //alert(list_id);

    //return (dispatch:any) => {
    //return new Promise((resolve, reject) => {
        dispatch({type: UPDATE_NOTE,
            payload: {
              note_id: note_id,
              note_title: note_title,
              note_text: note_text
            }
        })

        //dispatch(push(url));

    //    resolve()
    //});
  //}
});

export const searchNotes = (search_term: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState) + title);

  dispatch({type: SEARCH_NOTE,
      payload: {
        search_term: search_term
      }
  })
});



