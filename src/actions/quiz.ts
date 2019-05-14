import uuidv4 from 'uuid/v4';
import { GET_QUIZ, ADD_QUESTION_ANSWER, ADD_TODO, DELETE_TODO, ADD_TODO_TAG, ADD_NOTE, SEARCH_NOTE, UPDATE_NOTE } from './types';
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

export const addQuestionAnswer = (answer: any): any => ((dispatch: any, getState: any) => {
  //alert(JSON.stringify(getState()) + title + note_text);

  dispatch({type: ADD_QUESTION_ANSWER,
      payload: {
        answer: "answer"
      }
  })
});



export const getQuiz = (quiz_number: any) => {
       alert(JSON.stringify("hello"));

        /*return(dispatch) => {
            axios.get(URL)
              .then((response) => {dispatch(GET_CLASSROOM(response));})
              .catch((response) => {return Promise.reject(response);});
        };*/

       let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...' 
       }

       return(dispatch: any) => {
        alert("hello");

        /*/api/discussions/tag
        return axios.post("http://localhost:4000/api/quiz", { name: this.state.name, email: this.state.email, password: this.state.password, name: this.state.name })
                    .then(res => {
                      alert(JSON.stringify(res.data.status.token));
                      console.log(res.data);
                      
                      dispatch(getTagsSuccess(res.data.response.tags))*/
                      //dispatch({type: GET_TAGS, payload: {tags: res.data.response.tags}})

                      //cookie.load("onboarded")
                      //cookie.set("token", "res.data.status.token", {path: "/"});
                      //cookie.set("name", "res.data.status.token", {path: "/"});

                      dispatch({type: GET_QUIZ,
                          payload: {
                           is_authenticated: "is_authenticated"
                          }
                      })

                    /*}).catch((error) => {
                      alert(error) //Logs a string: Error: Request failed with status code 404
                    })*/
      }



        /*axios.post("http://localhost:4000/api/signup", { name: this.state.name, email: this.state.email, password: this.state.password, name: this.state.name }, {headers: headers})
              .then(res => {

                //set token in cookie

                dispatch({type: AUTHENTICATED,
                    payload: {
                     is_authenticated: "is_authenticated"
                    }
                })

                alert(JSON.stringify(res.data.status.token));
                console.log(res.data);
                //localStorage.setItem("user", JSON.stringify({session_token: res.data.status.session_token}));
                //redirect to homepage
                //alert(JSON.parse(localStorage.getItem("user")).session_token);
              }).catch((error) => {
                alert(error) //Logs a string: Error: Request failed with status code 404
              })*/

              //dispatch({type: AUTHENTICATE,
              //    payload: {
              //     is_authenticated: is_authenticated
              //    }
              //})
};



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



