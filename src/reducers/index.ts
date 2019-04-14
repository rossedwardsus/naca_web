import { combineReducers } from 'redux'
import login from './login'
import profile from './profile'
import quizes from './quiz'

export default combineReducers({
  login: login,
  profile: profile,
  quizes: quizes,
})




/*import { ADD_TODO, DELETE_TODO, ADD_TODO_LIST, SEARCH_NOTE } from '../actions/types';

export interface ITodo {
	list_id: number;
	name: string;
    todo_id: string;
    title: string;
    description: string;
}

interface ITodoState {
    todos: Array<ITodo>
};

//const defaultState: ITodoState = {
//    todos: [{list_id: 1, name: "workout", todos: [{todo_id: 1, title: "1"}]}, {list_id: 2, name: "gre", todos: [{todo_id: 1, title: "1"}]}]
//};

const defaultState: any = {
    //todos: [{list_id: "20515590-6dd4-4f97-ab4e-0b781ac326a0", name: "workout", todos: [{todo_id: 1, title: "1"}]}, {list_id: 2, name: "gre", todos: [{todo_id: 1, title: "1"}]}]
    todos: []
};

 let temp_state: any = null;
  	  

export default function todoReducer(state: any = defaultState, action: any): any {
  
  switch (action.type) {
  	case ADD_TODO_LIST:
  	 //alert("add to do list");
  	 temp_state = state.todos;
  	 temp_state.push({list_id: action.payload.list_id, list_name: action.payload.list_name, todos: []});

	  /*return Object.assign({}, state, {
            todos: [
                { list_id: "generateId()", title: action.payload.title, todos: [] },
                ...state.todos
            ]
        })*/
      /*return {todos: [...temp_state]}; 

    case ADD_TODO:
      //return [...state, action.payload];
      //alert("reducer" + JSON.stringify(action.payload));
      let index = state.todos.findIndex((todo: any) => todo.list_id == 1);
      //alert(JSON.stringify(temp_todos));
      //temp_todos[0]["name"] = "testing";
      //alert("updated" + JSON.stringify(temp_todos));
      //find index of list
      temp_state = state.todos;
      temp_state[index]["list_name"] = "testing";*/
      //temp_state[0].push({});

      /*return Object.assign({}, state, {
      			//if state length is > 0
      			//find list by add and then add
      			//state.todos.filter
      			//else just add the todo to a new list
                //todos: [
                //    { todo_id: "generateId()", title: action.payload.title, description: action.payload.description },
                //    ...state.todos
                //]
                todos: [...temp_state]
            });*/
        /*return {todos: [...temp_state]}

    case DELETE_TODO:
      //return state.filter((todo: any) => todo.id !== action.payload.id);


    default:
      return state;
  }
}*/