import React, { PureComponent } from "react";
import TodoListPresenter from "./TodoListPresenter";

class TodoListContainer extends PureComponent {
  componentDidMount() {
    this.getTodoList();
  }

  getTodoList = async () => {
    console.log("props", this.props);
    const { getList } = this.props;
    const todoList = await getList();
    console.log("this.props", todoList);
  };

  render() {
    return (
      <>
        <TodoListPresenter {...this.props} />
      </>
    );
  }
}

export default TodoListContainer;
