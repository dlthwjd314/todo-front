import * as api from "../lib/apis";
import createRequestThunk from "../lib/createRequestThunk";
import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from "@redux-saga/core/effects";

const TODO_LIST = "TODO_LIST";
const ADD_TODO_LIST = "ADD_TODO_LIST";
const UPDATE_TODO_LIST = "UPDATE_TODO_LIST";
const DELETE_TODO_LIST = "DELETE_TODO_LIST";

const initialState = {
  todos: [],
};

export const todoList = createRequestSaga("TODO_LIST", api.getAll);
export const addTodoList = createRequestSaga("ADD_TODO_LIST", api.create);
export const updateTodoList = createRequestSaga("UPDATE_TODO_LIST", api.update);
export const deleteTodoList = createRequestSaga("DELETE_TODO_LIST", api.remove);

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TODO_LIST:
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     case ADD_TODO_LIST:
//       return {
//         ...state,
//         todos: state.todos.concat(action.payload),
//       };
//     case UPDATE_TODO_LIST:
//       return {
//         ...state,
//         todos: state.todos.splice(
//           todo => todo.findIndex(todo => state.todo.id === action.payload.id),
//           1,
//           action.payload
//         ),
//       };

//     case DELETE_TODO_LIST:
//       return {
//         ...state,
//         todos: state.todos.splice(
//           todo => todo.findIndex(todo => state.todo.id === action.payload.id),
//           1
//         ),
//       };
//     default:
//       return initialState;
//   }
// };

export function* reducer() {
  yield takeLatest(TODO_LIST, todoList);
}
export default reducer;
