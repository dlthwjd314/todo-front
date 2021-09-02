import React from "react";

const TodoListPresenter = props => {
  const { todoList } = props;
  console.log("props.todoList", todoList);
  return (
    <div>
      {/* {todoList.map(todo => (
        <div key={todo.id}>{todo.description}</div>
      ))} */}
    </div>
  );
};

export default TodoListPresenter;
