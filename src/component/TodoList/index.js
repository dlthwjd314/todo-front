import TodoListContainer from "./TodoListContainer";
import {
  todoList,
  addTodoList,
  updateTodoList,
  deleteTodoList,
} from "../../modules/todo";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const {
    reducer: { todos },
  } = state;

  return {
    todos,
  };
};

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(todoList()),
  addList: () => dispatch(addTodoList()),
  updateList: () => dispatch(updateTodoList()),
  deleteList: () => dispatch(deleteTodoList()),
});

console.log("mapDispatchToProps getList", mapDispatchToProps().getList);

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
