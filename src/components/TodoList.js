import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const {id, ...itemProps}
  const elements = todos.map((item) => {
    return (
      <li key={item.id}>
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
