import { ADD_STUDENT, ADD_GROUP, ADD_STUDENT_TO_GROUP, ADD_SUGGESTED_INTERVENTION, UPDATE_NOTE, SEARCH_NOTE } from '../actions/types';

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
    teacher: {students: [{student_id: "1", teacher_id: "1", student_first_name: "first name", student_last_name: "last name", naca_results: [{question_id: 1, answer: "1"}], attendance: "", suggested_interventions: {tiers: [{name: "tier_4"}]}, student_groups:[]}], groups: [{group_id: 1, group_name: "", students: ["1"]}]}
    //teachers: {teacher_id: 1, teacher_name: "", classroom_id: 1, students: [recommendended intrvientions, groups]}

};

 let temp_state: any = null;
  	  

export default function classroomReducer(state: any = defaultState, action: any): any {
  
  switch (action.type) {
  	case ADD_STUDENT:
        alert(JSON.stringify(action.payload));
       //note search terms
       //llop through note text ad only store words that arent a, the, of, and

  	  return Object.assign({}, state, {teacher: {students: [...state.teacher.students, { student_id: "generateId()", student_first_name: action.payload.student_first_name, student_last_name: action.payload.student_last_name }]}})
        //return {notes: [...temp_state]}; 

     
    case ADD_GROUP:
      //return [...state, action.payload];
      alert("reducer" + JSON.stringify(action.payload));
      //let index = state.notes.findIndex((note: any) => note.note_id == 1);
      
       return Object.assign({}, state, {teacher: {students: [...state.teacher.students], groups: [{group_id: 1, group_name: action.payload.group_name}]}});
      //return state

     case ADD_STUDENT_TO_GROUP:
      //return [...state, action.payload];
      alert("reducer" + JSON.stringify(action.payload));
      //let index = state.notes.findIndex((note: any) => note.note_id == 1);
   
      return Object.assign({}, state, {teacher: {students: [...state.teacher.students], groups: [{group_id: 1, group_name: action.payload.group_name, students: ["9"]}]}});
      //return state


    case ADD_SUGGESTED_INTERVENTION:
      //return [...state, action.payload];
      alert("reducer" + JSON.stringify(action.payload));
      //let index = state.notes.findIndex((note: any) => note.note_id == 1);
      
      return Object.assign({}, state, {teacher: {students: [...state.teacher.students], groups: [{group_id: 1, group_name: action.payload.group_name, students: ["9"]}]}});
      //return state


    default:
      return state;
  }
}