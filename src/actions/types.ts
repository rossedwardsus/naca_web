import * as H from 'history';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO_TAG = 'ADD_TODO_TAG';
export const ADD_NOTE = 'ADD_NOTE'
export const SEARCH_NOTE = 'SEARCH_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

export const AUTHENTICATE = 'AUTHENTICATE'


export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_CLASSROOM = 'GET_CLASSROOM'


export interface Todo {
  list_id?: string;
  list_name?: string;
  todo_id?: string;
  todo_title?: string;
  todo_description?: string
}

export interface ITodosArray {
  [position: number]: Todo
}

//state == list of todos
//dispatch = function
//add state and dispatch

//type MyTypeArray = Array<MyType>
//export interface MyInterface extends Array<MyType> { }

interface MatchParams {
    list_id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
     todo: Todo;
}


//interface Props extends RouteComponentProps {



//}

export interface RouteComponentProps<P> {
  classes: any;
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
