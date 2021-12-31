import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import SearchPanel from "../components/SearchPanel";

const App = () => {
  const toDoData = [
    { label: "Drink Coffee", important: false },
    { label: "Make Awesome App", important: true },
    { label: "Have a lunch", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
