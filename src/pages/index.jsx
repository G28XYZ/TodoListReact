import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import SearchPanel from "../components/SearchPanel";

const App = () => {
  const toDoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
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
