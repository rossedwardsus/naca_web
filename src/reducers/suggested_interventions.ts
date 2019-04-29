import { ADD_STUDENT, ADD_NOTE, UPDATE_NOTE, SEARCH_NOTE } from '../actions/types';

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
    tiers: [{tier_id: 1, tier_name: "TIER IV", display: "Intensive academic supports and progress monitoring (Student Assistance Teams, I.E.P.s, and 504 plans)"}]
};

 let temp_state: any = null;
  	  

export default function classroomReducer(state: any = defaultState, action: any): any {
  
  switch (action.type) {
  	case ADD_STUDENT:
     //note search terms
     //llop through note text ad only store words that arent a, the, of, and

     //let search_terms = action.note_text.split(" ");

  	 //alert("add to do list");
  	 temp_state = state.notes;
  	 temp_state.push({note_id: action.payload.note_id, note_title: action.payload.note_title, note_text: action.payload.note_text});

	  /*return Object.assign({}, state, {
            todos: [
                { list_id: "generateId()", title: action.payload.title, todos: [] },
                ...state.todos
            ]
        })*/
      return {notes: [...temp_state]}; 

   
    case UPDATE_NOTE:
      //return [...state, action.payload];
      //alert("reducer" + JSON.stringify(action.payload));
      let index = state.notes.findIndex((note: any) => note.note_id == 1);
      
      //alert(JSON.stringify(index));
      //temp_todos[0]["name"] = "testing";
      //alert("updated" + JSON.stringify(temp_todos));
      //find index of list
      
      let temp_notes_state = state.notes;
      temp_notes_state[index]["note_title"] = action.payload.note_title;
      temp_notes_state[index]["note_text"] = action.payload.note_text;
      //temp_state[0].push({});

      return Object.assign({}, state, {
            //if state length is > 0
            //find list by add and then add
            //state.todos.filter
            //else just add the todo to a new list
                //todos: [
                //    { todo_id: "generateId()", title: action.payload.title, description: action.payload.description },
                //    ...state.todos
                //]
                notes: [...temp_notes_state]
            });
      //return state


    default:
      return state;
  }
}